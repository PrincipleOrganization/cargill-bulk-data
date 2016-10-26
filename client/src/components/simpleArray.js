import React, {Component} from 'react';
import axios from 'axios';

const ArrayRow = ({data}) => {
  return (
    <tr>
      <td>{data.move}</td>
      <td>{data.id_BD}</td>
      <td>{data.id_TO}</td>
      <td>{data.id_TO_conn}</td>
      <td>{data.bailor.accessory}</td>
      <td>{data.bailor.name}</td>
      <td>{data.bailor.code}</td>
      <td>{data.sender.name}</td>
      <td>{data.sender.code}</td>
      <td>{data.carrier.name}</td>
      <td>{data.carrier.code}</td>
      <td>{data.carrier.okpo}</td>
      <td>{data.customer.name}</td>
      <td>{data.customer.code}</td>
      <td>{data.recipient.accessory}</td>
      <td>{data.recipient.name}</td>
      <td>{data.recipient.code}</td>
      <td>{data.transport.type}</td>
      <td>{data.transport.number}</td>
      <td>{data.transport.code}</td>
      <td>{data.transport.trailer.number}</td>
      <td>{data.transport.trailer.code}</td>
      <td>{data.driver.name}</td>
      <td>{data.driver.certificate}</td>
      <td>{data.driver.code}</td>
      <td>{data.driver.phone}</td>
      <td>{data.pick.point.type}</td>
      <td>{data.pick.point.name}</td>
      <td>{data.pick.point.address}</td>
      <td>{data.pick.point.code}</td>
      <td>{data.pick.point.id}</td>
      <td>{data.pick.station.name}</td>
      <td>{data.pick.station.id}</td>
      <td>{data.discharge.point.type}</td>
      <td>{data.discharge.point.name}</td>
      <td>{data.discharge.point.address}</td>
      <td>{data.discharge.point.code}</td>
      <td>{data.discharge.point.id}</td>
      <td>{data.discharge.station.name}</td>
      <td>{data.discharge.station.id}</td>
      <td>{data.weight.without}</td>
      <td>{data.weight.gross}</td>
      <td>{data.weight.tara}</td>
      <td>{data.weight.net}</td>
      <td>{data.points.first.type}</td>
      <td>{data.points.first.name}</td>
      <td>{data.points.first.address}</td>
      <td>{data.points.first.percent}</td>
      <td>{data.points.first.humidity}</td>
      <td>{data.points.first.type}</td>
      <td>{data.points.first.name}</td>
      <td>{data.points.first.address}</td>
      <td>{data.points.first.humidity}</td>
      <td>{data.points.first.humidity}</td>
      <td>{data.waybill.number}</td>
      <td>{data.waybill.data}</td>
      <td>{data.waybill.barcode}</td>
      <td>{data.waybill.complex.is}</td>
      <td>{data.waybill.complex.id}</td>
      <td>{data.dataVersion}</td>
      <td>{data.status}</td>
    </tr>
  );
}

export default class SimpleArray extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  handleReloadOnClick(e) {
    e.preventDefault();
    this.fetchData();
  }

  fetchData() {
    axios.get(`/api/v1/data`)
    .then((response) => {
      const data = response.data;
      this.setState({...this.state, data});
    });
  }

  renderArrayRows(data) {
    return (
      <tbody>
        {data.map((rec, index) => {
          return <ArrayRow data={rec} key={index} />
        })}
      </tbody>
    )
  }

  render() {
    const {data} = this.state;
    const arrayBody = this.renderArrayRows(data);

    const handleReloadOnClick = this.handleReloadOnClick.bind(this);

    return (
      <div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div class="btn-group" id="main-btn-group" role="group">
              <button type="button" class="btn btn-success" onClick={handleReloadOnClick}><i class="fa fa-refresh" aria-hidden="true"></i> Refresh</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Move</th>
                    <th>ID DB</th>
                    <th>ID TO</th>
                    <th>ID TO conn</th>
                    <th>Bailor (accessory)</th>
                    <th>Bailor (name)</th>
                    <th>Bailor (code)</th>
                    <th>Sender (name)</th>
                    <th>Sender (code)</th>
                    <th>Carrier (name)</th>
                    <th>Carrier (code)</th>
                    <th>Carrier (okpo)</th>
                    <th>Customer (name)</th>
                    <th>Customer (code)</th>
                    <th>Recipient (accessory)</th>
                    <th>Recipient (name)</th>
                    <th>Recipient (code)</th>
                    <th>Transport (type)</th>
                    <th>Transport (number)</th>
                    <th>Transport (code)</th>
                    <th>Transport (trailer number)</th>
                    <th>Transport (trailer code)</th>
                    <th>Driver (name)</th>
                    <th>Driver (certificate)</th>
                    <th>Driver (code)</th>
                    <th>Driver (Phone)</th>
                    <th>Pick (point type)</th>
                    <th>Pick (point name)</th>
                    <th>Pick (point address)</th>
                    <th>Pick (point code)</th>
                    <th>Pick (point id)</th>
                    <th>Pick (station name)</th>
                    <th>Pick (station id)</th>
                    <th>Discharge (point type)</th>
                    <th>Discharge (point name)</th>
                    <th>Discharge (point address)</th>
                    <th>Discharge (point code)</th>
                    <th>Discharge (point id)</th>
                    <th>Discharge (station name)</th>
                    <th>Discharge (station id)</th>
                    <th>Weight (without)</th>
                    <th>Weight (gross)</th>
                    <th>Weight (tara)</th>
                    <th>Weight (net)</th>
                    <th>Points (first type)</th>
                    <th>Points (first name)</th>
                    <th>Points (first address)</th>
                    <th>Points (first %)</th>
                    <th>Points (first humidity)</th>
                    <th>Points (second type)</th>
                    <th>Points (second name)</th>
                    <th>Points (second address)</th>
                    <th>Points (second %)</th>
                    <th>Points (second humidity)</th>
                    <th>Waybill (number)</th>
                    <th>Waybill (data)</th>
                    <th>Waybill (barcode)</th>
                    <th>Waybill (is complex)</th>
                    <th>Waybill (complex id)</th>
                    <th>Data version</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {arrayBody}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
