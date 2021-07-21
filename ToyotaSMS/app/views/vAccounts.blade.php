@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-table"></i> System Accounts</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="tblAcc" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Name</th>
                      <th>Designation</th>
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
                    <div class="card card-register mx-auto mt-2">
                        <div class="card-header"><strong>Update System Account</strong></div>
                      <div class="card-body">
                          <div class="text-center headMsg">
                            <label style="color: red" id="ErrMsg"></label>
                          </div>
                          
                          <div class="form-group">
                              <div class="form-row appUpdAcc">
                                <div class="col-md-12" >
                                  <label for="inpUID" id="LBinpUID">Username</label>
                                  <input class="form-control inp" id="inpUID" name="inpUID" type="text" maxlength="20" readonly="">
                                </div>

                                <div class="col-md-12" >
                                  <label for="inpName" id="LBinpName">Name</label>
                                  <input class="form-control inp" id="inpName" name="inpName" type="text" maxlength="30" placeholder="Enter Name">
                                </div>  

                                <div class="col-md-12">
                                  <label for="inpDesig" id="LBinpDesig">Designation</label>
                                  <select class="combobox form-control inp" id="inpDesig" name="inpDesig" value="">
                                      @foreach($Desig as $rs)
                                      <option style="display:none"></option>
                                      <option value="{{ $rs->Designation }}">{{ $rs->Designation }}</option>
                                      @endforeach
                                  </select>
                                </div>
                              </div>
                          </div>
                          <a class="btn btn-primary btn-block" href="#" data-toggle="modal" data-target="#ModalYesNo">Update</a>
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
    
    <div class="modal hide fade" tabindex="10" id="PwdModal" role="dialog" aria-hidden="true">
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
                        <div class="card-header"><strong>Changing System Account Password</strong></div>
                      <div class="card-body">
                          <div class="text-center headMsgCp">
                            <label style="color: red" id="ErrMsgCp"></label>
                          </div>
                          <div class="form-group">
                              <div class="form-row appUpdAcc">
                                <div class="col-md-12" >
                                  <label for="inpUIDcp" id="LBinpUIDcp">Username</label>
                                  <input class="form-control cp" id="inpUIDcp" name="inpUIDcp" type="text" maxlength="20" readonly="">
                                  <label></label>
                                </div>

                                <div class="col-md-12" >
                                    <label for="inpOldPwd" id="LBinpOldPwd">Old Password</label>
                                    <input class="form-control cp" id="inpOldPwd" name="inpOldPwd" type="password" maxlength="20" placeholder="Enter old password">
                                    <label></label>
                                </div>   
                                  
                                <div class="col-md-12" >
                                    <label for="inpPWDcp" id="LBinpPWDcp">New Password</label>
                                    <input class="form-control cp" id="inpPWDcp" name="inpPWDcp" type="password" maxlength="20" placeholder="Enter new password">
                                    <label></label>
                                </div>  

                                <div class="col-md-12" >
                                    <label for="inpConfirmCp" id="LBinpConfirmCp">Confirm New Password</label>
                                    <input class="form-control cp" id="inpConfirmCp" name="inpConfirmCp" type="password" maxlength="20" placeholder="Confirm new password">
                                </div>  
                                
                              </div>
                          </div>
                          <a class="btn btn-primary btn-block" href="#" id="aCp">Change Password</a>
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
                        <button type="submit" class="btn btn-primary" id="aUpdAcc" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
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
                        <button type="submit" class="btn btn-primary" id="aDelAcc" data-dismiss="modal"><i class="fa fa-close" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-undo" ></i> NO</button>
                    </div>
                </div>
              <div class="HideUid">
                  
              </div>
            </div>
          </div>
        </div>
    </div>


<script src="plugins/js/shwAcc.js"></script>
<script src="plugins/js/AccCRUD.js"></script>

@stop

