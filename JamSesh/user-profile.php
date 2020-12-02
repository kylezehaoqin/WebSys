<?php
  // Initialize the session
  session_start();

  // Check if the user is logged in, if not then redirect him to homepage
  if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: hompage.php");
    exit;
  }

  // Include config file
  include 'assets/php/db_conn.php';
 ?>

<!-- Check for edit profile updates -->
 <?php
   if( isset($_POST['save-changes'] ) ) {

     // Profile Picture
     if( isset( $_FILES['profile-pic'] ) ) {
       if( @mime_content_type($_FILES["profile-pic"]["tmp_name"]) == "image/png" ||
       @mime_content_type($_FILES["profile-pic"]["tmp_name"]) == "image/jpeg" ) { // check that it is an image
         $file_name = $_FILES['profile-pic']['name'];
         move_uploaded_file( $_FILES["profile-pic"]["tmp_name"], "assets/img/profile-pictures/".$file_name );
         $sql = "UPDATE users SET profilePic = ? WHERE id = ?";
         if($stmt = mysqli_prepare($link, $sql)){
           $param_profilePic = "assets/img/profile-pictures/".$file_name;
           $param_id = $_SESSION["id"];
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "si", $param_profilePic, $param_id);
            // Attempt to execute the prepared statement
            if( !mysqli_stmt_execute( $stmt ) ) {
              echo "Oops! Something went wrong. Please try again later.";
            }
          }
        }
      }

     //Bio
     if( $_POST['bio'] != "" ) {
       $sql = "UPDATE users SET bio = ? WHERE id = ?";
       if($stmt = mysqli_prepare($link, $sql)){
         $param_bio = $_POST['bio'];
         $param_id = $_SESSION["id"];
          // Bind variables to the prepared statement as parameters
          mysqli_stmt_bind_param($stmt, "si", $param_bio, $param_id);
          // Attempt to execute the prepared statement
          if( !mysqli_stmt_execute( $stmt ) ) {
            echo "Oops! Something went wrong. Please try again later.";
          }
        }
     }

     // Display Name
     if( $_POST['display-name'] != "" ) {
       $sql = "UPDATE users SET displayName = ? WHERE id = ?";
       if($stmt = mysqli_prepare($link, $sql)){
         $param_displayName = $_POST['display-name'];
         $param_id = $_SESSION["id"];
          // Bind variables to the prepared statement as parameters
          mysqli_stmt_bind_param($stmt, "si", $param_displayName, $param_id);
          // Attempt to execute the prepared statement
          if( !mysqli_stmt_execute( $stmt ) ) {
            echo "Oops! Something went wrong. Please try again later.";
          }
        }
     }

     // Username
     if( $_POST['username'] != "" ) {
       $sql = "UPDATE users SET username = ? WHERE id = ?";
       if($stmt = mysqli_prepare($link, $sql)){
         $param_username = $_POST['username'];
         $param_id = $_SESSION["id"];
          // Bind variables to the prepared statement as parameters
          mysqli_stmt_bind_param($stmt, "si", $param_username, $param_id);
          // Attempt to execute the prepared statement
          if( !mysqli_stmt_execute( $stmt ) ) {
            echo "Oops! Something went wrong. Please try again later.";
          }
        }
     }

     $sql = "SELECT id, email, password, username, displayName, bio, profilePic FROM users WHERE email = ?";
     if($stmt = mysqli_prepare($link, $sql)){
         // Bind variables to the prepared statement as parameters
         mysqli_stmt_bind_param($stmt, "s", $param_email);
         // Set parameters
         $param_email = $_SESSION["email"];
         // Attempt to execute the prepared statement
         if(mysqli_stmt_execute($stmt)){
             // Store result
             mysqli_stmt_store_result($stmt);
             // Bind result variables
             mysqli_stmt_bind_result($stmt, $id, $email, $hashed_password, $username, $displayName, $bio, $profilePic);
             if(mysqli_stmt_fetch($stmt)){
               // Store data in session variables
               $_SESSION["loggedin"] = true;
               $_SESSION["id"] = $id;
               $_SESSION["email"] = $email;
               $_SESSION["username"] = $username;
               $_SESSION["displayName"] = $displayName;
               $_SESSION["bio"] = $bio;
               $_SESSION["profilePic"] = $profilePic;
             }
           }
         }
       }
  ?>

<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>User Profile Page</title>
  <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/Homepage-Nav.css">
  <link rel="stylesheet" href="assets/css/User-Profile.css">
</head>

<body>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
    <div class="container"><a class="navbar-brand" href="#">JamSesh</a>
      <div class="collapse navbar-collapse" id="navcol-1">
        <ul class="nav navbar-nav mr-auto">
        </ul>
        <span class="navbar-text actions">
          <a class="btn btn-light action-button" role="button" href="logout.php">Log Out</a>
        </span>
      </div>
    </div>
  </nav>

  <!-- Edit Profile Modal -->
  <div class="modal fade" id="editProfile" tabindex="-1" role="dialog" aria-labelledby="editProfileLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editProfileLabel">Edit Profile</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form id="editProfileForm" method='POST' action='user-profile.php' enctype='multipart/form-data'>
          <div class="modal-body">
            <div class="form-group">

              <?php
                // Profile Picture
                echo "<label id='firstLabel' for='profilePicInput'>Upload Profile Picture</label>";
                echo "<input type='file' name='profile-pic' class='form-control' id='profilePicInput'>";

                // Bio
                echo "<label for='userBioInput'>Edit Bio</label>";
                echo "<textarea name='bio' class='form-control' id='userBioInput' rows='3' maxlength='255'>";
                echo $_SESSION["bio"];
                echo "</textarea>";

                // Display Name
                echo "<label for='profileNameInput'>Change Profile Name</label>";
                echo "<input type='text' name='display-name' class='form-control' id='profileNameInput' placeholder='" . $_SESSION["displayName"] . "'>";

                // Username
                echo "<label for='usernameInput'>Change Username</label>";
                echo "<div class='input-group'>";
                  echo "<div class='input-group-prepend'>";
                    echo "<div class='input-group-text'>@</div>";
                  echo "</div>";
                  echo "<input type='text' name='username' class='form-control' id='usernameInput' placeholder='" . $_SESSION["username"] . "'>";
                echo "</div>";
               ?>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="submit" name='save-changes' value="Submit" class="btn btn-info">Save Changes</button>
          </div>
        </form>


      </div>
    </div>
  </div>

  <section class="d-xl-flex flex-row pad">
    <div class="d-flex flex-column text-center bio">

      <?php
        echo "<img src='" . $_SESSION["profilePic"] . "' alt='profile picture' class='pic'>";
        echo "<p class='subName'>@" . $_SESSION["username"] . "</p>";
        echo "<p class='name'>" . $_SESSION["displayName"] . "</p>";
        echo "<p class='subName'>" . $_SESSION["bio"] . "</p>";
       ?>

      <a data-toggle="modal" data-target="#editProfile" class="btn btn-light action-button changePic" role="button">
        Edit Profile
      </a>
      <hr />
      <div class="genreContainer d-flex flex-row">
        <p class="btn btn-light action-button genres">Classical</p>
        <p class="btn btn-light action-button genres">R&B</p>
        <p class="btn btn-light action-button genres">Rock</p>
        <p class="btn btn-light action-button genres">Pop</p>
      </div>
    </div>
    <div class="d-flex flex-column text-center studioSection">
      <!-- Find a way to not have this container move up whenever a studio is added -->
      <div class="studioHeader d-flex flex-row">
        <h2>Your Studios</h2>
        <p class="btn btn-light action-button addStudio">New Studio</p>
      </div>
      <a class="studio" href="studio.php">
        <div class="studioTitle text-left">Studio 1</div>
        <p class="studioDescription text-left">You can have a little paragraph here describing your project. It can be a
          blurb like blah blah blah or something. You can write your own description if you want.</p>
        <div class="studioGenres d-flex flex-row">
          <p class="btn btn-light action-button genres">R&B</p>
          <p class="btn btn-light action-button genres">Pop</p>
        </div>
      </a>
      <a class="studio" href="studio.php">
        <div class="studioTitle text-left">Studio 2</div>
        <p class="studioDescription text-left">You can have a little paragraph here describing your project. It can be a
          blurb like blah blah blah or something. You can write your own description if you want.</p>
        <div class="studioGenres d-flex flex-row">
          <p class="btn btn-light action-button genres">Classical</p>
        </div>
      </a>
      <a class="studio" href="studio.php">
        <div class="studioTitle text-left">Studio 3</div>
        <p class="studioDescription text-left">You can have a little paragraph here describing your project. It can be a
          blurb like blah blah blah or something. You can write your own description if you want.</p>
        <div class="studioGenres d-flex flex-row">
          <p class="btn btn-light action-button genres">Rock</p>
          <p class="btn btn-light action-button genres">Pop</p>
        </div>
      </a>
    </div>
  </section>

  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>
