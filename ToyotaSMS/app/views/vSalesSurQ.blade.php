@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-table"></i> Sales Survey Questions</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="SalesSurQ" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Number</th>
                      <th>Question</th>
                      <th>Answer Type</th>
                    </tr>
                  </thead>
                </table>
            </div>
        </div>
    </div>

    <div class="modal hide fade" tabindex="10" id="Edit" role="dialog" aria-hidden="true">
        <div class="modal-dialog EditVwe">
          <!-- Modal content-->
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
                <div class="lr">
                    <div class="rl">
                    </div>
                </div>
            </div>
            <div class="modal-body">

                <div class="container">
                    <div class="card card-register mx-auto mt-5">
                        <div class="card-header"><strong>Update Sales Survey Question</strong></div>
                      <div class="card-body">
                          <div class="form-group">
                            <div class="form-row">
                              <div class="col-md-6 inpNo">

                              </div>
                            </div>
                          </div>

                          <div class="form-group inpQ" >

                          </div>
                          <div class="form-group">
                            <div class="form-row">
                              <div class="col-md-12 inpAT">

                              </div>
                              <div class="col-md-6 inpG" >
<!--                                <label for="exampleConfirmPassword" id="lbGrp">Group</label>
                                <select class="combobox form-control" id="inpGrp" name="G" value="">
                                                <option style="display:none"></option>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                </select>-->
                              </div>
                            </div>
                          </div>
                          <a class="btn btn-primary btn-block" href="#" id="aEdtQSalesM" data-toggle="modal" data-target="#ModalYesNo">Update</a>
                      </div>
                    </div>
                </div>

            </div>

            <div class="modal-footer">
                <button id="btnX" type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
            </div>
          </div>
        </div>  
    </div>
    
    <div id="ModalYesNo" class="modal fade" role="dialog">
        <div class="modal-dialog Diag">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
                <strong class="modal-title"><i class="fa fa-edit"></i> Update</strong>
            </div>
            <div class="modal-body">
              <p>Are you sure do you want to update this record?</p>
                <div class="col-sm-12 text-center" id="">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="submit" class="btn btn-primary" id="aEdtQSales" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" id="bEdtNo" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    
    <div id="ModalDelete" class="modal fade" role="dialog">
        <div class="modal-dialog Diag">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
                <strong class="modal-title"><i class="fa fa-close"></i> Delete</strong>
            </div>
            <div class="modal-body">
              <p>Are you sure do you want to delete this record?</p>
                <div class="col-sm-12 text-center" id="">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="submit" class="btn btn-primary" id="btnDelete" name="Yes"><i class="fa fa-close" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" id="bEdtNo" name="Yes" data-dismiss="modal"><i class="fa fa-undo" ></i> NO</button>
                    </div>
                </div>
              <div class="HideQid">
                  
              </div>
            </div>
          </div>
        </div>
    </div>


<script src="plugins/js/shwSalesQuestion.js"></script>
<script src="plugins/js/jqModal.js"></script>
<script src="plugins/js/ajxInsert.js"></script>

@stop