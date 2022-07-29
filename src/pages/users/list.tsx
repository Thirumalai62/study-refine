import { Breadcrumb, getDefaultSortOrder, Icons, List, Table, TextField, useModalForm, useTable } from "@pankod/refine-antd";
import { IResourceComponentsProps } from "@pankod/refine-core";
import { IUsers } from "interfaces";

export const UserList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps, sorter } = useTable<IUsers>({
        initialSorter: [
            {
                field: "id",
                order: "desc",
            },
        ],
    });
    // useMany => retrieving multiple items from a resource.
    // const { data: categoriesData, isLoading } = useMany<ICategory>({
    //     resource: "categories",
    //     ids: categoryIds,
    //     queryOptions: {
    //         enabled: categoryIds.length > 0,
    //     },
    // });
    // selecting the dropdown list it is similar to get the list
    // const { selectProps: categorySelectProps } = useSelect<ICategory>({
    //     resource: "categories",
    //     fetchSize: 10,
    //     // filters
    //     // filters: [
    //     //     {
    //     //         field: "title",
    //     //         operator: "eq",
    //     //         value: "Card",
    //     //     },
    //     // ],
    //     // descending
    //     // sort: [
    //     //     {
    //     //         field: "id",
    //     //         order: "desc",
    //     //     },
    //     // ],
    // });
    // modal form
    const {
        modalProps: createModalProps,
        formProps: createFormProps,
        show: createShow,
    } = useModalForm<IUsers>({
        action: "create",
    });
    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editShow,
        id: editId,
    } = useModalForm<IUsers>({
        action: "edit",
    });
    const { CloseCircleOutlined, CheckCircleOutlined } = Icons;
    return (
        <List
            createButtonProps={{
                onClick: () => {
                    createShow();
                },
            }}
            pageHeaderProps={{
                breadcrumb: (
                    <Breadcrumb
                        showHome={false}
                        // breadcrumbProps={{ separator: "-" }}
                    />
                ),
            }}
        >
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    key="id"
                    title="ID"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("id", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="firstName"
                    key="firstName"
                    title="FirstName"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("firstName", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="lastName"
                    key="lastName"
                    title="LastName"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("lastName", sorter)}
                    sorter
                />
                <Table.Column
                    dataIndex="email"
                    key="email"
                    title="Email"
                    render={(value) => <TextField value={value} />}
                    defaultSortOrder={getDefaultSortOrder("email", sorter)}
                    sorter
                />
                {/* <Table.Column
                    dataIndex="status"
                    key="status"
                    title="Status"
                    render={(value) => (
                        <BooleanField
                            value={value === true}
                            trueIcon={<CheckCircleOutlined />}
                            falseIcon={<CloseCircleOutlined />}
                            valueLabelTrue={true}
                            valueLabelFalse={false}
                        />
                    )}
                /> */}
                {/* <Table.Column
                    dataIndex={["category", "id"]}
                    title="Category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return <TextField value={categoriesData?.data.find((item) => item.id === value)?.title} />;
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select style={{ minWidth: 200 }} mode="multiple" placeholder="Select Category" {...categorySelectProps} />
                        </FilterDropdown>
                    )}
                /> */}
                {/* <Table.Column<IUsers>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                // recordItemId={record.id}
                                onClick={() => editShow(record.id)}
                            />
                            <ShowButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                /> */}
            </Table>
            {/* <Modal {...createModalProps}>
                <Form {...createFormProps} layout="vertical">
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Status" name="status">
                        <Radio.Group>
                            <Radio value="draft">Draft</Radio>
                            <Radio value="published">Published</Radio>
                            <Radio value="rejected">Rejected</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal> */}
            {/* <Modal {...editModalProps}>
                <Form {...editFormProps} layout="vertical">
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Status" name="status">
                        <Radio.Group>
                            <Radio value="draft">Draft</Radio>
                            <Radio value="published">Published</Radio>
                            <Radio value="rejected">Rejected</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal> */}
        </List>
    );
};
