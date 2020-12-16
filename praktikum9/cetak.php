<?php 
 session_start();
 include("config.php"); 
$db=new mysqli("$dbhost","$dbuser","$dbpass");
$db->select_db("$dbname");


$query="select * from users;";

$result = $db->query($query);  



echo "<table width='75%'
cellpadding='2' cellspacing='0' border='1'>
<tr>
<th>No</th>
<th>Username</th>
<th>Email</th>
<th>Nama Depan</th>
<th>Nama Belakang</t>
<th>Kota</th>";

$no=1;
while($row = mysqli_fetch_array($result))
{
    
echo"<tr>
<td>$no</td>
<td>$row[1]</td>
<td>$row[2]</td>
<td>$row[3]</td>
<td>$row[4]</td>
<td>$row[5]</td>
</tr>";

$no+=1;
}

echo "</table>";

@mysqli_close($con);

?>
<a href="index.php">Kembali</a>