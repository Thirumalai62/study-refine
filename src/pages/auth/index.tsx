import { AntdLayout, Button, Card, Col, Form, Input, Row } from "@pankod/refine-antd";
import { useLogin } from "@pankod/refine-core";
import React from "react";
import Logo from "../../assets/logo-dark.png";

export interface ILoginForm {
    username: string;
    password: string;
    // remember: boolean;
}

export const CustomLogin: React.FC = () => {
    const [form] = Form.useForm<ILoginForm>();
    const { mutate: login } = useLogin<ILoginForm>();
    // card title
    const CardTitle = (
        <div style={{ textAlign: "center" }}>
            <img style={{ width: "150px" }} src={Logo} width="100%" alt="card-title" />
        </div>
    );
    return (
        <AntdLayout>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    <div style={{ maxWidth: "408px", margin: "auto" }}>
                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form<ILoginForm>
                                layout="vertical"
                                form={form}
                                onFinish={(values) => {
                                    // setRememberMe(values)
                                    login(values);
                                }}
                                requiredMark={false}
                                // initialValues={setInitialValue()}
                            >
                                <Form.Item
                                    name="username"
                                    label={"Username"}
                                    // label={t("pages.login.email", "Username")}
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "12px" }}
                                >
                                    <Input size="large" placeholder="admin" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label={"Password"}
                                    // label={t(
                                    //     "pages.login.password",
                                    //     "Password",
                                    // )}
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "22px" }}
                                >
                                    <Input type="password" placeholder="●●●●●●●●" size="large" />
                                </Form.Item>
                                <Button type="primary" size="large" htmlType="submit" block>
                                    {/* {t("pages.login.signin", "Sign in")} */}
                                    Sign in
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};
