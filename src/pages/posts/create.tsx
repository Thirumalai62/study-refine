import { Checkbox, Create, Form, Input, Select, useCheckboxGroup, useForm, useSelect } from "@pankod/refine-antd";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

import { ICategory, IPost, ITags } from "interfaces";

export const PostCreate: React.FC<IResourceComponentsProps> = () => {
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const { formProps, saveButtonProps } = useForm<IPost>();

    const { selectProps: categorySelectProps } = useSelect<ICategory>({
        resource: "categories",
        filters: [
            {
                field: "title",
                operator: "eq",
                value: "Card",
            },
        ],
    });

    // checkbox props
    const { checkboxGroupProps } = useCheckboxGroup<ITags>({
        resource: "tags",
        // defaultValue: [1, 2],
        // optionLabel: "title",
        // optionValue: "id",
        // filters: [
        //     {
        //         field: "title",
        //         operator: "eq",
        //         value: "Driver Deposit",
        //     },
        // ],
    });
    console.log("checkboxGroupProps", checkboxGroupProps);

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        options={[
                            {
                                label: "published",
                                value: "published",
                            },
                            {
                                label: "draft",
                                value: "draft",
                            },
                            {
                                label: "rejected",
                                value: "rejected",
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name={["category", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select {...categorySelectProps} />
                </Form.Item>
                <Form.Item label="Tags" name="tags">
                    <Checkbox.Group {...checkboxGroupProps} />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <ReactMde
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) => Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)}
                    />
                </Form.Item>
            </Form>
        </Create>
    );
};
