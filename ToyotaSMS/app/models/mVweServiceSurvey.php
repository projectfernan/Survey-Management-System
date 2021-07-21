<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of mVweServiceSurvey
 *
 * @author f-Laptop
 */
class mVweServiceSurvey {
   
public static function mfVweCustSerSur($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
public static function mfSerAns($param){
        $rs = DB::select("call slctsersurans(?,?)",$param);
        return $rs;
    }    
  
}
