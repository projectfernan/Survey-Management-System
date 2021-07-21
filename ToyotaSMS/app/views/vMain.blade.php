@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

<div class="container-fluid">
    <ul class="nav nav-tabs">
        <li class="nav-item active"><a class="nav-link active" data-toggle="tab" href="#SalSurTab">Sales Survey</a></li>
        <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#SerSurTab">Service Survey</a></li>
    </ul>
    <div class="tab-content">
        <div id="SalSurTab" class="tab-pane in active">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fa fa-table"></i> Sales Survey</div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="custSalSur" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>Survey Date</th>
                              <th>Customer</th>
                              <th>Contact No</th>
                              <th>Plate No</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                        </table>
                    </div>
                </div>
            </div>
   
            <div class="modal fade" tabindex="-1" id="vweSalSur" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-full">
                  <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-body viw">
                            <div class="card mb-3">
                                <div class="table-responsive" id="tbhide">
                                    <table class="table" id="customer">
                                        <tbody>

                                        <tr>
                                          <td><strong>Customer :</strong></td>
                                          <td id="Cust"></td>
                                        </tr>    

                                        <tr>
                                          <td><strong>Arrival Time :</strong></td>
                                          <td id="ArrTime"></td>
                                        </tr>

                                        <tr>
                                          <td><strong>Type of Transaction :</strong></td>
                                          <td id="TypeOfTrans"></td>
                                        </tr>

                                        <tr>
                                          <td><strong>Mktg Prof. :</strong></td>
                                          <td id="mktg"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="card mb-3">
                                <div class="card-header">
                                  <i class="fa fa-table"></i> Survey Answers :</div>
                                <div class="card-body">
                                  <div class="table-responsive">
                                    <table class="table table-bordered" id="modSalsur" width="100%" cellspacing="0">
                                      <thead>
                                        <tr>
                                          <th >Question Number</th>
                                          <th >Question</th>
                                          <th >Answer</th>
                                        </tr>
                                      </thead>
                                      <tfoot>
                                        <tr>
                                            <th >Question Number</th>
                                            <th >Question</th>
                                            <th >Answer</th>
                                        </tr>
                                      </tfoot>

                                      <tbody>


                                      </tbody>

                                    </table>
                                  </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button id="btnX" type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>
 
        <div id="SerSurTab" class="tab-pane fade">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fa fa-table"></i> Service Survey</div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="custSerSur" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>Survey Date</th>
                              <th>Customer</th>
                              <th>Contact No</th>
                              <th>Plate No</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                        </table>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="vweSerSur" role="dialog">
                <div class="modal-dialog modal-full">
                  <!-- Modal content-->
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl">
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        
                        <div class="card mb-3">
                            <div class="table-responsive" id="tbhide">
                                <table class="table" id="customer">
                                    <tbody>
                                        
                                    <tr>
                                      <td><strong>Customer :</strong></td>
                                      <td id="CustSer"></td>
                                    </tr>    
                                        
                                    <tr>
                                      <td><strong>Arrival Time :</strong></td>
                                      <td id="ArrTimeSer"></td>
                                    </tr>

                                    <tr>
                                      <td><strong>Service Advisor :</strong></td>
                                      <td id="SerAdv"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div class="card mb-3">
                            <div class="card-header">
                              <i class="fa fa-table"></i> Survey Answers :</div>
                            <div class="card-body">
                              <div class="table-responsive">
                                <table class="table table-bordered" id="modSersur" width="100%" cellspacing="0">
                                  <thead>
                                    <tr>
                                      <th >Question Number</th>
                                      <th >Question</th>
                                      <th >Answer</th>
                                    </tr>
                                  </thead>
                                  <tfoot>
                                    <tr>
                                        <th >Question Number</th>
                                        <th >Question</th>
                                        <th >Answer</th>
                                    </tr>
				  </tfoot>
                                  
                                  <tbody>
                               
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="btnXser" type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>




<script src="plugins/js/ajxServerSide.js"></script>
<script src="plugins/js/jqModal.js"></script>

@stop