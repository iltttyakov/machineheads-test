import {
  FileTextOutlined,
  MenuOutlined,
  TagOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Button, Drawer, Menu, MenuProps, Space } from 'antd'
import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '@/features/Auth'
import { VisuallyHidden } from '@/shared/ui'
import {Routes} from "@shared/lib";

const menuItems: MenuProps['items'] = [
  {
    key: 'posts',
    icon: <FileTextOutlined />,
    label: <Link to="/posts">Посты</Link>,
  },
  {
    key: 'tags',
    icon: <TagOutlined />,
    label: <Link to={Routes.Tags}>Тэги</Link>,
  },
  {
    key: 'authors',
    icon: <TeamOutlined />,
    label: <Link to={Routes.Authors}>Авторы</Link>,
  },
]

export const AdminLayout: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const dispatch = useDispatch()

  const toggleDrawer = () => setDrawerVisible(!drawerVisible)
  const handleLogout = () => dispatch(logout())

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 h-16 bg-white border-b border-gray-200">
        <div className="w-full flex justify-between items-center">
          <div className="text-md font-semibold">Автор: Владислав Ильтяков</div>

          {/* Десктопное меню */}
          <div className="hidden md:block">
            <Space>
              <Button
                type="link"
                href="https://novosibirsk.hh.ru/resume/d86bc4b5ff0b25b33d0039ed1f384c6c763464"
                target="_blank"
              >
                Резюме
              </Button>
              <Button type="link" href="https://t.me/iltttyakov" target="_blank">
                Телеграм
              </Button>
              <Button
                type="link"
                href="https://github.com/iltttyakov/machineheads-test"
                target="_blank"
              >
                Проект на GitHub
              </Button>
            </Space>
          </div>

          <div className="hidden md:block">
            <Button type="link" onClick={handleLogout}>
              Выйти
            </Button>
          </div>

          {/* Кнопка гамбургер на мобильных */}
          <div className="md:hidden">
            <Button type="text" icon={<MenuOutlined />} onClick={toggleDrawer}>
              <VisuallyHidden>Открыть меню</VisuallyHidden>
            </Button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <Drawer
        closable
        title="Меню"
        placement="left"
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        onClose={toggleDrawer}
      >
        <Menu mode="inline" items={menuItems} />
        <div className="p-4 border-t border-gray-200">
          <Space direction="vertical" size="middle" className="w-full">
            <Button
              type="link"
              href="https://novosibirsk.hh.ru/resume/d86bc4b5ff0b25b33d0039ed1f384c6c763464"
              target="_blank"
            >
              Резюме
            </Button>
            <Button type="link" href="https://t.me/iltttyakov" target="_blank">
              Телеграм
            </Button>
            <Button
              type="link"
              href="https://github.com/iltttyakov/machineheads-test"
              target="_blank"
            >
              Проект на GitHub
            </Button>
            <Button
              type="link"
              onClick={() => {
                handleLogout()
                toggleDrawer()
              }}
            >
              Выйти
            </Button>
          </Space>
        </div>
      </Drawer>

      <div className="flex pt-16">
        <aside className="hidden md:block fixed top-16 left-0 h-[calc(100vh-64px)] w-52 bg-white border-r border-gray-200">
          <Menu
            mode="inline"
            defaultSelectedKeys={['posts']}
            items={menuItems}
            className="h-full border-r-0"
          />
        </aside>

        <main className="flex flex-1 p-6 bg-gray-50 min-h-[calc(100vh-64px)] md:ml-52">
          {children}
        </main>
      </div>
    </div>
  )
}
