import React from 'react'
import { Descriptions, Button, notification } from 'antd'
import './index.scss'

class OrderDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			order: {
				parkingLotName: "XXX停车场",
				postion: "香洲区XXX路XX",
				carNumber: "粤C7777",
				phone: "13631230000",
				mail: "971499022@qq.com",
				cost: 11,
				status: false,
				startTime: "2020年8月9日 15:30",
				endTime: "2020年8月9日 16:00"
			},
			isComfirmBtnShow: 'none',
			isCancelBtnShow: 'inline-block'
		}
	}





	componentDidMount() {
		const { status } = this.state
		if (status === false) {
			this.setState({
				isComfirmBtnShow: 'inline-block'
			})
		}
		// if (new Date() >= this.order.startTime.valueOf()) {
		//     this.setState({
		//         isCancelBtnShow: 'none'
		//     })
		// }

		if (new Date() >= 2597044772906) {
			this.setState({
				isCancelBtnShow: 'none'
			})
		}
	}

	comfirmOrder = () => {
		notification.success({
			message: 'Success',
			description:
				'预约成功！',
		})
		this.setState({
			isComfirmBtnShow: 'none'
		})
		this.setState((prev) => ({
			order: { ...prev.order, status: true }
		}))
	}

	cancelOrder = () => {
		const date = new Date().getTime()
		console.log(date)

		// if (date >= this.order.startTime.valueOf()) {
		//     notification['warning']({
		//         message: 'Notification Title',
		//         description:'已超时，无法取消预约！',
		//     })
		//     this.setState({
		//         isCancelBtnShow: 'none'
		//     })
		// }

		if (date >= 1597044772906) {
			notification.warning({
				message: 'Sorry',
				description: '已超时，无法取消预约！',
			})
			this.setState({
				isCancelBtnShow: 'none'
			})
		} else {
			notification.success({
				message: 'Success',
				description: '取消成功！',
			})
		}
	}

	render() {
		return (
  <div className="container">
				<Descriptions
					bordered
					title="订单详情"
					size="default">
					<Descriptions.Item label="停车场">{this.state.order.parkingLotName}</Descriptions.Item>
					<Descriptions.Item label="位置">{this.state.order.postion}</Descriptions.Item>
					<Descriptions.Item label="车牌号">{this.state.order.carNumber}</Descriptions.Item>
					<Descriptions.Item label="时间段">{this.state.order.startTime} - {this.state.order.endTime}</Descriptions.Item>
					<Descriptions.Item label="手机">{this.state.order.phone}</Descriptions.Item>
					<Descriptions.Item label="邮箱">{this.state.order.mail}</Descriptions.Item>
					<Descriptions.Item label="费用">{this.state.order.cost}￥</Descriptions.Item>
					<Descriptions.Item label="订单状态">
						<span className={this.state.order.status ? "completed" : "uncompleted"}>
							{this.state.order.status ? "预约成功" : "取消预约"}
						</span>
					</Descriptions.Item>
				</Descriptions>

				<div className="btn-div">
					<div onClick={this.comfirmOrder} style={{ display: this.state.isComfirmBtnShow }} className="btn-div-item">
						<Button type="primary">
							确认订单
                        </Button>
					</div>
					<div style={{ display: this.state.isCancelBtnShow }} className="btn-div-item">
						<Button onClick={this.cancelOrder}>取消预约</Button>
					</div>
				</div>


			</div>
		)
	}
}

export default OrderDetail