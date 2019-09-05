import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { login_fn } from './api/user';
import axios from 'axios';
class Index extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login_fn(values).then(res => {
                    console.log(res.data)
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Row>
                    <Col xs={{ span: 8, offset: 7 }} xl={10}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}

                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
          </Button>
                            </Form.Item>
                        </Form>
                    </Col>


                </Row>
            </div>


        )
    }
}
export default Form.create({ name: 'normal_login' })(Index)