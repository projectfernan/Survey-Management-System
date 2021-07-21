@extends('Layouts.adminLayout')
@section('content')

<link rel="stylesheet" href="plugins/css/customDes.css">

<div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-table"></i> Customer Information Records</div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="tblCustRec" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>NickName</th>
                      <th>Birth Day</th>
                      <th>Age</th>
                      <th>Marital Status</th>
                      <th>Contact No</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Company Name</th>
                      <th>Company Address</th>
                      <th>Occupation</th>
                      <th>Industry</th>
                      <th>Plate No</th>
                      <th>Unit Model</th>
                      <th>Vehicle Usage</th>
                      <th>Sports</th>
                      <th>Cultural/Interest</th>
                    </tr>
                  </thead>
                </table>
            </div>
        </div>
    </div>

<script src="plugins/js/shwCustRec.js"></script>

@stop
