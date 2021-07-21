<?php

class mtblaccounts {
    public static function mfGetAcc($param){
        $rs = DB::select('call slctacc(?,?)',$param);
        return $rs;
    }
    
    public static function mfRecAcc($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkAcc($para){
        $rs = DB::select('call chkAcc(?)',$para);
        return $rs;
    }
    
    public static function mfInsAcc($para){
        $rs = DB::insert('call insAcc(?,?,?,?)',$para);
        return $rs;
    }
    
    public static function mfEdtAcc($para){
        $rs = DB::insert('call editAcc(?,?,?)',$para);
        return $rs;
    }
    
    public static function mfDelAcc($para){
        $rs = DB::select('call delAcc(?)',$para);
        return $rs;
    }
    
    public static function mfChangePwd($para){
        $rs = DB::select('call editAccPwd(?,?)',$para);
        return $rs;
    }
    
    
}
