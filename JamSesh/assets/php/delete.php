<?php include 'db_conn.php';

$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

try {
  if(isset($_GET['duser'])) {
    $delete_email = $_GET['duser'];
    $sql = "DELETE FROM users where email = '{$delete_email}';";
    $result = mysqli_query($conn, $sql);
    echo "<br/><br/><span>deleted {$delete_email} successfully...!!</span>";
    header("location: ../../admin.php");
    exit;
  }
  if(isset($_GET['dstudio'])) {
    $delete_email = $_GET['dstudio'];
    $sql = "DELETE FROM studios where id = {$delete_email} ;";
    $result = mysqli_query($conn, $sql);
    echo "<br/><br/><span>deleted successfully...!!</span>";
    header("location: ../../admin.php");
    exit;
  }
  if(isset($_GET['delete-studio'])) {
    $delete_studio = $_GET["delete-studio"];
    $sql = "DELETE FROM studios where id = {$delete_studio} ;";
    $result = mysqli_query($conn, $sql);
    echo "<br/><br/><span>deleted successfully...!!</span>";
    header("location: ../../user-profile.php");
    exit;
  }
  $conn->close();
}  catch(Exception $e) {
  echo $e->getMessage();
}


?>
