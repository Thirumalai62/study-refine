import { AntdLayout, Avatar, Radio, Space, Typography } from "@pankod/refine-antd";
import { useGetIdentity } from "@pankod/refine-core";
import React from "react";

const { Text } = Typography;

export const Header: React.FC<any> = ({ role }) => {
    const { data: user } = useGetIdentity();

    console.log("User", user);

    const shouldRenderHeader = user && (user.name || user.avatar);

    return shouldRenderHeader ? (
        <AntdLayout.Header
            style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0px 24px",
                height: "64px",
                backgroundColor: "#FFF",
            }}
        >
            <Space>
                <Radio.Group
                    value={role}
                    onChange={(event) => {
                        localStorage.setItem("role", event.target.value);
                        window.location.reload();
                    }}
                >
                    <Radio.Button value="admin">Admin</Radio.Button>
                    <Radio.Button value="editor">Editor</Radio.Button>
                </Radio.Group>
                {user.name && (
                    <Text ellipsis strong>
                        {user.name}
                    </Text>
                )}
                {user.avatar && <Avatar size="large" src={user?.avatar} alt={user?.name} />}
            </Space>
        </AntdLayout.Header>
    ) : null;
};
