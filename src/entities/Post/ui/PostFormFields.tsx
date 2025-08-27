import {Button, Form, Input, Select, Upload } from "antd";
import React from "react";
import {IAuthorListItem} from "@entities/Author";
import {ITagListItem} from "@entities/Tag";
import {UploadOutlined} from '@ant-design/icons'

interface IPostFormFieldsProps {
    authors: IAuthorListItem[],
    authorsLoading: boolean,
    tags: ITagListItem[],
    tagsLoading: boolean,
    mode?: 'create' | 'update',
    previewPictureUrl?: string
    previewPictureAlt?: string
}

export const PostFormFields: React.FC<IPostFormFieldsProps> = (
    {
        authors,
        authorsLoading,
        tags,
        tagsLoading,
        mode = 'create',
        previewPictureUrl,
        previewPictureAlt,
    }
) => {
    return(
        <>
            <Form.Item
                label="Заголовок"
                name="title"
                rules={[{ required: true, message: 'Введите заголовок' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Автор"
                name="authorId"
                rules={[{ required: true, message: 'Выберите автора' }]}
            >
                <Select
                    loading={authorsLoading}
                    options={authors.map((author) => ({
                        value: author.id,
                        label: `${author.lastName} ${author.name} ${author.secondName}`,
                    }))}
                />
            </Form.Item>

            <Form.Item label="Теги" name="tagIds">
                <Select
                    mode="multiple"
                    loading={tagsLoading}
                    options={tags.map((tag) => ({
                        value: tag.id,
                        label: tag.name,
                    }))}
                />
            </Form.Item>

            <Form.Item
                label="Текст"
                name="text"
                rules={[{ required: true, message: 'Введите текст поста' }]}
            >
                <Input.TextArea rows={6} />
            </Form.Item>

            {
                (previewPictureUrl && mode === 'update') && (
                    <div className="mb-4">
                        <img
                            src={previewPictureUrl}
                            alt={previewPictureAlt}
                            style={{ maxWidth: 200, borderRadius: 8, display: 'block' }}
                        />
                    </div>
                )
            }

            <Form.Item
                label="Превью"
                name="previewPicture"
                valuePropName="file"
                rules={[{ required: mode === 'create', message: 'Необходимо загрузить изображение' }]}
            >
                <Upload
                    beforeUpload={() => false}
                    maxCount={1}
                    listType="picture"
                >
                    <Button icon={<UploadOutlined />}>Загрузить</Button>
                </Upload>
            </Form.Item>
        </>
    )
}