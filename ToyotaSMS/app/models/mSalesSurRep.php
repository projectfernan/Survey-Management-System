<?php
class mSalesSurRep {
    public static function mfSalesDetaRep($param){
        $rs = DB::select("call slctsalestotalynp(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesBarRep($param){
        $rs = DB::select("call slctsalestotalbar(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesCommRep($param){
        $rs = DB::select("call slctsalestotalcncp(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesPaeRep($param){
        $rs = DB::select("call slctsalestotalpae(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesEPRep($param){
        $rs = DB::select("call slctSalesTotalEP(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesOSRep($param){
        $rs = DB::select("call slctSalesTotalOS(?,?)",$param);
        return $rs;
    }
    
    public static function mfSalesNPSRep($param){
        $rs = DB::select("call slctSalesTotalNPS(?,?)",$param);
        return $rs;
    }
  
}
