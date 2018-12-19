<?php
    abstract class ClassConnection{
        #Conexão banco de dados
        protected function conectaDB(){
            try{
                $Con = new PDO("mysql: host=localhost; dbname=db_system; charset=utf8", "root", "");
                return $Con;
            }catch (PDOException $Erro){
                return $Erro->getMessage();
            }
        }
    }
?>