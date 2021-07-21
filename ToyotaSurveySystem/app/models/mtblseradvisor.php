<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of tblseradvisor
 *
 * @author f-Laptop
 */
class mtblseradvisor {
    public static function mfGetSerAdv(){
        $rs = DB::select('select ServiceAdvisor from tblseradvisor order by ServiceAdvisor');
        Return $rs;
    }
}
