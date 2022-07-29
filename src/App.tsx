import { ErrorComponent, LoginPage, notificationProvider, ReadyPage } from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import { Footer, Header, Layout, OffLayoutArea, Sider, Title } from "components/layout";
import { Custom } from "pages/custom";
import { PostEdit, PostList, PostShow } from "pages/posts";
import { UserList } from "pages/users";
// import "styles/antd.less";
import { newEnforcer } from "casbin";
import { adapter, model } from "./accessControl";
import { authProvider } from "./authProvider";

function App() {
    const role = localStorage.getItem("role") ?? "admin";
    return (
        <Refine
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            accessControlProvider={{
                can: async ({ resource, action, params }) => {
                    const enforcer = await newEnforcer(model, adapter);
                    if (action === "delete" || action === "edit" || action === "show") {
                        const can = await enforcer.enforce(role, `${resource}/${params.id}`, action);
                        return Promise.resolve({ can });
                    }
                    const can = await enforcer.enforce(role, resource, action);

                    return Promise.resolve({ can });
                },
            }}
            routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        element: <Custom />,
                        path: "/custom",
                    },
                ],
            }}
            // routerProvider={routerProvider}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            authProvider={authProvider}
            LoginPage={LoginPage}
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    // create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                    canDelete: true,
                },
                {
                    name: "users",
                    list: UserList,
                },
            ]}
            Title={Title}
            Header={() => <Header role={role} />}
            Sider={Sider}
            Footer={Footer}
            Layout={Layout}
            OffLayoutArea={OffLayoutArea}
        />
    );
}

export default App;
