@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header"><strong>Register New System Account</strong></div>
      <div class="card-body">
          <div class="text-center headMsg">
              <label style="color: red" id="ErrMsg"></label>
          </div>
          
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-12" >
                <label for="inpUID" id="LBinpUID">Username</label>
                <input class="form-control inp" id="inpUID" name="inpUID" type="text" maxlength="20" placeholder="Enter username">
                <label></label>
              </div>
                
              <div class="col-md-6" >
                <label for="inpPWD" id="LBinpPWD">Password</label>
                <input class="form-control inp" id="inpPWD" name="inpPWD" type="password" maxlength="20" placeholder="Enter password">
                <label></label>
              </div>  
                
              <div class="col-md-6" >
                <label for="inpConfirm" id="LBinpConfirm">Confirm Password</label>
                <input class="form-control inp" id="inpConfirm" name="inpConfirm" type="password" maxlength="20" placeholder="Confirm password">
                <label></label>
              </div> 
                
              <div class="col-md-6" >
                <label for="inpName" id="LBinpName">Name</label>
                <input class="form-control inp" id="inpName" name="inpName" type="text" maxlength="30" placeholder="Enter Name">
                <label></label>
              </div>  
                
              <div class="col-md-6">
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
          
          <a class="btn btn-primary btn-block" href="#" data-toggle="modal" data-target="#SaveYesNo">Register</a>
      </div>
    </div>
    
    <div id="SaveYesNo" class="modal fade" role="dialog">
        <div class="modal-dialog Diag">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
                <strong class="modal-title"><i class="fa fa-save"></i> Register</strong>
            </div>
            <div class="modal-body">
              <p>Are you sure that all of your inputs are correct?</p>
                <div class="col-sm-12 text-center" id="">
                    <div class="btn-group" role="group" aria-label="...">
                        <button type="submit" class="btn btn-primary" id="aRegNewAcc" data-dismiss="modal"><i class="fa fa-save" ></i> YES</button>
                        <button type="submit" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-close" ></i> NO</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    
  </div>

  <script src="plugins/js/AccCRUD.js"></script>
@stop
