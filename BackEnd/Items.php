<?php

class Items {
    private $db = null;
    private $table = 'items';
    
    function __construct($db) {
        $this->db = $db;
    }

    public function get() {
        $items = [];

        $result = $this->db->query("SELECT * FROM $this->table");
        while($row = $result->fetch_assoc()) {
            $items[] = (object) $row;
        }
    
        return $items;
    }

    public function insert($newItem) {
        $stmt = $this->db->prepare("INSERT INTO `$this->table` (`name`, `price`) VALUE (?, ?)");
        $stmt->bind_param("sd", $newItem->name, $newItem->price);
        if($stmt->execute()) {
            $result = $this->db->query("SELECT * FROM `$this->table` WHERE `$this->table`.`id` = $stmt->insert_id LIMIT 1");
            $row = $result->fetch_assoc();
            $item = (object) $row;

            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];

            return $_error;
        }
    }

    public function update($updateItem) {
        $stmt = $this->db->prepare("UPDATE `$this->table` SET `name` = ?, `price` = ? WHERE `id` = ? LIMIT 1");
        $stmt->bind_param("sdi", $updateItem->name, $updateItem->price, $updateItem->id);
        if($stmt->execute()) {
            $result = $this->db->query("SELECT * FROM `$this->table` WHERE `$this->table`.`id` = $updateItem->id LIMIT 1");
            $row = $result->fetch_assoc();
            $item = (object) $row;
            
            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];
            
            return $_error;
        }    
    }

    public function delete($deleteItem) {
        $stmt = $this->db->prepare("DELETE FROM `$this->table` WHERE `id` = ? LIMIT 1");
        $stmt->bind_param("i", $deleteItem->id);
        if($stmt->execute()) {
            $item = (object) [];
            
            return $item;
        } else {
            $_error = (object) ['property' => 'Here we go'];
            
            return $_error;
        }    
    }

}