<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Survey Management System</title>
  <link rel="icon" href="includes/ico/toyota.ico" type="image/ico"/>
  <!-- Bootstrap core CSS-->
  <link href="bootstrap/admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="bootstrap/admin/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="bootstrap/admin/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="bootstrap/admin/css/sb-admin.css" rel="stylesheet">
  
  <script src="bootstrap/admin/vendor/jquery/jquery.min.js"></script>

</head>

<body class="fixed-nav sticky-footer bg-dark mar" id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    
      <a class="navbar-brand" href="#" alt="TSMS"><img class="img-responsive" width="25px" height="20px" src="includes/img/TQA.jpg"> Survey Management System </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            
          
          
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <label class="nav-link" style="color:#FFFFFF"> <strong style="color:#00FFFF"><i class="fa fa-user"></i> {{ Session::get('Desig')}}: </strong> {{ Session::get('Name')}}</label>
        </li> 
        
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#ModLogout">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper">
    <div class="container-fluid">
      <!-- Example DataTables Card-->
      
       @yield('content')

    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright ?? 2017 - 2018 Toyota Quezon Ave</small>
        </div>
      </div>
    </footer>
    
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    
    <!-- Logout Modal-->
    <div class="modal fade" id="ModLogout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">??</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" id="aLogout" href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Bootstrap core JavaScript-->
    
    <script src="bootstrap/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="bootstrap/admin/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
<!--    <script src="bootstrap/admin/vendor/chart.js/Chart.min.js"></script>-->
    <script src="bootstrap/admin/vendor/datatables/jquery.dataTables.js"></script>
    <script src="bootstrap/admin/vendor/datatables/dataTables.bootstrap4.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="bootstrap/admin/js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="bootstrap/admin/js/sb-admin-datatables.min.js"></script>
<!--    <script src="bootstrap/admin/js/sb-admin-charts.min.js"></script>-->
    <script src="plugins/js/Restri.js"></script>
    <script src="plugins/js/jCommand.js"></script>
    
  </div>
</body>

</html>
