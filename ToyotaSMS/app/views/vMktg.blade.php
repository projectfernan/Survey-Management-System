@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">
    
<div class="form-group">
    <div class="row">
        <div class="col-md-4">
            <div class="card card-register mx-auto mt-2">
                <div class="card-header"><i class="fa fa-save"></i> <strong>Add Marketing Prof.</strong></div>
                    <div class="card-body">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="inpMktg" id="LBinpMktg">Marketing Prof.</label>
                                    <input class="form-control inp" id="inpMktg" name="inpMktg" type="text" placeholder="Enter Marketing Prof.">
                                </div>
                                
                                <div class="col-md-12">
                                    <label for="inpMktgGen" id="LBinpG">Gender</label>
                                    <select class="combobox form-control inp" id="inpG" name="inpG" value="">
                                        <option style="display:none"></option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>    
                        <a class="btn btn-primary btn-block" href="#" id="aRegMktg">Add</a>
                    </div>    
            </div>  
        </div>  
        
        <div class="col-md-8">
            <div class="card mb-3 mt-2">
                <div class="card-header">
                    <i class="fa fa-table"></i>  <strong>Marketing Professors</strong></div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="tblMktg" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>Marketing Prof.</th>
                              <th>Gender</th>
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
                        <div class="card-header"><strong>Update Marketing Prof.</strong></div>
                            <div class="card-body">
                                <div class="form-group inpMktg">
                                    <div class="row">
                                        <div class="col-md-12 appMktg">
                                            
                                        </div>

                                        <div class="col-md-12 appMktgG">
                                            
                                        </div>
                                    </div>
                                </div>
                                <a class="btn btn-primary btn-block" href="#" id="aUpdMktg" data-dismiss="modal">Update</a>
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
                        <button type="submit" class="btn btn-primary" id="btnDelMktg" data-dismiss="modal"><i class="fa fa-close" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-undo" ></i> NO</button>
                    </div>
                </div>
              <div class="HideQid">
                  
              </div>
            </div>
          </div>
        </div>
    </div>


<script src="plugins/js/shwMktg.js"></script>
<script src="plugins/js/jqModal.js"></script>
<script src="plugins/js/ajxInsert.js"></script>

@stop
