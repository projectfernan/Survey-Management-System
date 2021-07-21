@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">
    
<div class="form-group">
    <div class="row">
        <div class="col-md-6">
            <div class="card card-register mx-auto mt-2">
                <div class="card-header"><i class="fa fa-save"></i> <strong>Add Unit Model</strong></div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="inpTypeOfTrans" id="lbUM">Unit Model</label>
                            <input class="form-control" id="inpUM" type="text" aria-describedby="emailHelp" placeholder="Enter Unit Model">
                        </div>
                        <a class="btn btn-primary btn-block" href="#" id="aRegUM">Add</a>
                    </div>    
            </div>  
        </div>  
        
        <div class="col-md-6">
            <div class="card mb-3 mt-2">
                <div class="card-header">
                    <i class="fa fa-table"></i> <strong>Unit Models</strong></div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="tblUM" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>Unit Model</th>
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
                     <div class="card card-register mx-auto mt-2">
                        <div class="card-header"><strong>Update Unit Model</strong></div>
                            <div class="card-body">
                                <div class="form-group inpUM">
                                    
                                </div>
                                <a class="btn btn-primary btn-block" href="#" id="updUM" data-dismiss="modal">Update</a>
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
                        <button type="submit" class="btn btn-primary" id="btnDelUM" data-dismiss="modal"><i class="fa fa-close" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-undo" ></i> NO</button>
                    </div>
                </div>
              <div class="HideQid">
                  
              </div>
            </div>
          </div>
        </div>
    </div>


<script src="plugins/js/shwUM.js"></script>
<script src="plugins/js/jqModal.js"></script>
<script src="plugins/js/ajxInsert.js"></script>

@stop


