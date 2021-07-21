<?php

class mtblsalesquestion {
    public static function mfVweSalesSurQ($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkSalesSurQ($param){
        $res = DB::select('call chktblSalesquestion(?)',$param);
        return ($res);
    }
    
    public static function mfInsSalesSurQ($param){
        $res = DB::insert('call insNewSalesQ(?,?,?,?)',$param);
        return ($res);
    }
    
    public static function mfEdtSalesSurQ($param){
        $res = DB::insert('call editSalesQ(?,?,?,?)',$param);
        return ($res);
    }
    
    public static function mfDelSalesSurQ($param){
        $res = DB::insert('call delSalesQ(?)',$param);
        return ($res);
    }
            
}
