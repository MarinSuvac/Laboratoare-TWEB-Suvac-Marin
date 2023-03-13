import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [form] = Form.useForm();
    const [cards, setCards] = useState([
        { title: 'Test', content: 'CR-212', prenume: 'Suvac' },
    ]);
    const handleSubmit = (values: { title: string; content: string; prenume: string }) => {
        const newCard = { title: values.title, content: values.content, prenume: values.prenume };
        const newCards = [...cards, newCard];
        setCards(newCards);
        console.log('Form values:', values);
        alert('Forma s-a adăugat cu succes!');
    };
    return (
        <Layout>
            <Header style={{ display: 'flex', justifyContent: 'center' }}>
            
            </Header>
            <Layout>
                <Sider width={150}  style={{ background: '#fff' }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title="Meniu 1">
                            <Menu.Item key="1">Pagina1</Menu.Item>
                            <Menu.Item key="2">Pagina2</Menu.Item>
                            <Menu.Item key="3">Pagina3</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Content style={{ padding: '50px' }}>
                    <Form form={form} onFinish={handleSubmit}>
                        <Form.Item name="title" rules={[{ required: true, message: 'Introduceți titlul' }]}>
                            <Input placeholder="Titlu" />
                        </Form.Item>
                        <Form.Item name="content" rules={[{ required: true, message: 'Introduceți contentul' }]}>
                            <Input placeholder="Content" />
                        </Form.Item>
                        <Form.Item name="prenume" rules={[{ required: true, message: 'Introduceți prenumele' }]}>
                            <Input placeholder="Prenume" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Trimite
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {cards.map(card => (
                            <Card key={card.title} style={{ width: 300, margin: '20px' }}>
                                <Card.Meta title={`${card.title} - ${card.prenume}`} description={card.content} />
                            </Card>
                        ))}
                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Suvac Marin CR-212</Footer>

        </Layout>
    );
};

export default App;

