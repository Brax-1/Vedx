import React, { Component } from 'react';

export default class DataTable extends Component {
    render() {
        var { data, SortingData, outthis } = this.props;
        return (
            <>
                {data.length === 0 ? <div className='TableNoDataFound'>No Data Found</div> :
                    <>
                        < div className='TableDataCover'>
                            <table className='Maintable' cellSpacing="0">
                                <thead className='MainTablehead'>
                                    <tr>
                                        <th onClick={() => SortingData(outthis, "order_id")}>ORDER ID <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "customer")}>CUSTOMER <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "country")}>COUNTRY <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "address")}>ADDRESS <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "product_title")}>PRODUCT_TITLE <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "product_description")}>DESCRIPTION <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "date")}>ORDER DATE <i class="fas fa-sort"></i></th>
                                        <th onClick={() => SortingData(outthis, "status")}>STATUS <i class="fas fa-sort"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((datas) => {
                                        return (
                                            <tr key={data.order_id}>
                                                <td className='MainTableOrder'>#{datas.order_id}</td>
                                                <td>{datas.customer}</td>
                                                <td>{datas.country}</td>
                                                <td>{datas.address}</td>
                                                <td>{datas.product_title}</td>
                                                <td>{datas.product_description}</td>
                                                <td>{datas.date}</td>
                                                <td><div className={`${datas.status}Status`}>{datas.status}</div></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    
                                </tfoot>
                            </table>
                        </div>
                    </>

                }

            </>
        );
    }
}
