<?php
    include("ClassConnection.php");
    
    class ClassUsers extends ClassConnection{
        

        #Mostra Usuarios
        public function showUsers(){
            header("Content-type: application/json; charset=UTF-8");
            $BFetch=$this->conectaDB()->prepare("Select * from tb_users");
            $BFetch->execute();

            $J=[];
            $I=0;

            while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
                $J[$I]=[
                    'Id' => $Fetch['id'],
                    'User' => $Fetch['user'],
                    'Passoword' => $Fetch['password'],
                    'Name' => $Fetch['name'],
                    'Last_Name' => $Fetch['last_name'],
                    'Email' => $Fetch['email'],
                    'Name' => $Fetch['name'],
                    'Personal_Quote' => $Fetch['personal_quote'],
                    'Account_Status' => $Fetch['account_status'],
                    'Privileges' => $Fetch['privileges'],
                    'Date_Create' => $Fetch['date_create']
                ];
                $I++;
            }
            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json; charset=UTF-8");
            echo json_encode($J, JSON_UNESCAPED_UNICODE);

        }
    }
?>