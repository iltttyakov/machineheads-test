import {Avatar, Button, Checkbox, Form, Input, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import React from "react";

export interface IAuthorFormFieldsProps {
    mode?: 'create' | 'update'
    avatarUrl?: string,
}

export const AuthorFormFields: React.FC<IAuthorFormFieldsProps> = (
    {
        mode = 'create',
        avatarUrl,
    }
) => {
    return (
        <>
            <Form.Item
                name="name"
                label="Имя"
                rules={[{required: true, message: 'Введите имя'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Фамилия"
                rules={[{required: true, message: 'Введите фамилию'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="secondName"
                label="Отчество"
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name="shortDescription"
                label="Краткое описание"
            >
                <Input.TextArea rows={2}/>
            </Form.Item>

            <Form.Item
                name="description"
                label="Описание"
            >
                <Input.TextArea rows={4}/>
            </Form.Item>

            {
                (mode === 'update' && avatarUrl) && (
                    <div className="mb-4 flex items-center gap-2">
                        <Avatar src={avatarUrl} size={64}/>
                        <span>Текущий аватар</span>
                    </div>
                )
            }

            {
                (mode === 'update' && avatarUrl) && (
                    <Form.Item name="removeAvatar" valuePropName="checked">
                        <Checkbox>Удалить текущий аватар</Checkbox>
                    </Form.Item>
                )
            }

            <Form.Item
                name="avatar"
                label="Аватар"
            >
                <Upload
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false}
                >
                    <Button icon={<UploadOutlined/>}>Выберите файл</Button>
                </Upload>
            </Form.Item>
        </>
    )
}