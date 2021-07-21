@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">
    
<div class="form-group">
    <div class="row">
        <div class="col-md-6">
            <div class="card card-register mx-auto mt-2">
                <div class="card-header"><i class="fa fa-save"></i> <strong>Add Designation</strong></div>
                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="inpDesig" id="LBinpDesig">Designation</label>
                                    <input class="form-control" id="inpDesig" name="inpDesig" type="text" aria-describedby="emailHelp" placeholder="Enter Designation">
                                    <label></label>
                                </div>   
                                
                                <div class="col-md-12 MainHome">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkSurRec">
                                        <input class="form-check-input" type="checkbox" id="chkSurRec" name="chkSurRec"> Survey Record</label>
                                    </div>
                                </div>  
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkCustRec">
                                        <input class="form-check-input" type="checkbox" id="chkCustRec" name="chkCustRec"> Customer Record</label>
                                    </div>
                                </div>  
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkQ">
                                        <input class="form-check-input" type="checkbox" id="chkQ" name="chkQ"> Questionaires</label>
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkCustRep">
                                        <input class="form-check-input" type="checkbox" id="chkCustRep" name="chkCustRep"> Customer Representatives</label>
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkTOT">
                                        <input class="form-check-input" type="checkbox" id="chkTOT" name="chkTOT"> Type of Transactions</label>
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkVU">
                                        <input class="form-check-input" type="checkbox" id="chkVU" name="chkVU"> Vehicle Unit</label>
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkRep">
                                        <input class="form-check-input" type="checkbox" id="chkRep" name="chkRep"> Reports</label>
                                    </div>
                                </div>
                                
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <label class="form-check-label" id="LBchkSS">
                                        <input class="form-check-input" type="checkbox" id="chkSS" name="chkSS"> System Settings</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>    
                        <a class="btn btn-primary btn-block" href="#" id="aRegDesig">Add</a>
                    </div>    
            </div>  
        </div>  
        
        <div class="col-md-6">
            <div class="card mb-3 mt-2">
                <div class="card-header">
                    <i class="fa fa-table"></i> <strong>Designations</strong></div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="tblDesig" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>Designation</th>
                            </tr>
                          </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>

    <div class="modal hide fade" tabindex="10" id="Edit" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
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
                     <div class="card card-register mx-auto mt-2">
                        <div class="card-header"><strong>Update Type Of Transaction</strong></div>
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="row appDesig">
                   
                                    </div>
                                </div>
                                <a class="btn btn-primary btn-block" href="#" id="updDesig" >Update</a>
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
                        <button type="submit" class="btn btn-primary" id="btnDelDesig" data-dismiss="modal"><i class="fa fa-close" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-undo" ></i> NO</button>
                    </div>
                </div>
              <div class="HideDesigId">
                  
              </div>
            </div>
          </div>
        </div>
    </div>


<script src="plugins/js/shwDesig.js"></script>
<script src="plugins/js/jqModal.js"></script>
<script src="plugins/js/DesigCRUD.js"></script>

@stop
