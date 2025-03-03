<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
    
        <title>Add Travel Offer - Dashboard</title>
    
        <!-- Custom fonts for this template-->
        <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">
    
        <!-- Custom styles for this template-->
        <link href="css/sb-admin-2.min.css" rel="stylesheet">
    
    </head>
    <body id="page-top">

        <!-- Page Wrapper -->
        <div id="wrapper">
    
            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
                <!-- Sidebar - Brand -->
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    
                    <div class="sidebar-brand-text mx-3">Travel Booking <sup></sup></div>
                </a>
    
                <!-- Divider -->
                <hr class="sidebar-divider my-0">
    
                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
    
             
    
    
            </ul>
            <!-- End of Sidebar -->
    
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
    
                <!-- Main Content -->
                <div id="content">
    
                    <!-- Topbar -->
                    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    
                        <!-- Sidebar Toggle (Topbar) -->
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
    
                       
    
                       
    
                    </nav>
                    <!-- End of Topbar -->
    
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
    
                        <!-- Page Heading -->
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Add a Travel Offer</h1>
                                  </div>
    
                        <!-- Content Row -->
                        <div class="row">
    
                            <!-- Earnings (Monthly) Card Example -->
                            <div class="col-xl-8 col-md-6 mb-4">
                                <div class="card border-left-primary shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            
                                            <form id="addTravelOfferForm" action="Verification.php" method="POST">
                                                <label for="title">Title:</label><br>
                                                <input class="form-control form-control-user" type="text" id="title" name="title" >
                                                <span id="title_error"></span><br>
                                             
                                        
                                                <label for="destination">Destination:</label><br>
                                                <input class="form-control form-control-user" type="text" id="destination" name="destination" >
                                                <span id="destination_error"></span><br>
                                        
                                                <label for="departure_date">Departure Date:</label><br>
                                                <input class="form-control form-control-user" type="date" id="departure_date" name="departure_date" >
                                                <span id="departure_date_error"></span><br>
                                        
                                                <label for="return_date">Return Date:</label><br>
                                                <input class="form-control form-control-user" type="date" id="return_date" name="return_date" >
                                                <span id="return_date_error"></span><br>
                                        
                                                <label for="price">Price :</label><br>
                                                <input class="form-control form-control-user"  type="number" id="price" name="price" step="0.01" >
                                                <span id="price_error"></span><br>
                                        
                                                
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" name="disponible">
                                                        <label class="custom-control-label" for="customCheck">Availability
                                                            </label>
                                                    </div>
                                                </div>
                                                <label for="category">Category:</label><br>
                                                <select class="form-control form-control-user" id="category" name="category" >
                                                    <option value="adventure">Adventure</option>
                                                    <option value="relaxation">Relaxation</option>
                                                    <option value="culture">Culture</option>
                                                    
                                                </select>
                                           <br>
                                        
                                                <button type="submit" 
                                                class="btn btn-primary btn-user btn-block" 
                                                onClick="validerFormulaire()"
                                                >Add Offer</button> 
                                                <!-- <button type="submit" 
                                                class="btn btn-primary btn-user btn-block" 
                                                
                                                >Add Offer</button> -->
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                          
                        </div>
    
                      
    
                    </div>
                   
    
                </div>
               
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Travel Booking 2024</span>
                        </div>
                    </div>
                </footer>
              
    
            </div>
         
    
        </div>
       
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
        <script src="js/addOffer.js"></script>
    
        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    
        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    
        <!-- Custom scripts for all pages-->
        <script src="js/sb-admin-2.min.js"></script>
    
        <!-- Page level plugins -->
        <script src="vendor/chart.js/Chart.min.js"></script>
    
        <!-- Page level custom scripts -->
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
    
    </body>

</html>
