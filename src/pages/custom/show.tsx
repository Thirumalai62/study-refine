import { AntdLayout, Row } from "@pankod/refine-antd";
import React from "react";

export const Custom: React.FC = () => {
    return (
        <AntdLayout>
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                    background: "crimson",
                }}
            >
                <h1 style={{ color: "#fff" }}>Custom Page</h1>
            </Row>
        </AntdLayout>
    );
};
