<?php
class mServiceSurRep {
    public static function mfServiceYnRep($param){
        $rs = DB::select("call slctservicetotalynp(?,?)",$param);
        return $rs;
    }
    
    public static function mfServiceCommRep($param){
        $rs = DB::select("call slctservicetotalcncp(?,?)",$param);
        return $rs;
    }
    
    public static function mfServicePaeRep($param){
        $rs = DB::select("call slctservicetotalpae(?,?)",$param);
        return $rs;
    }
    
    public static function mfServiceEPRep($param){
        $rs = DB::select("call slctServiceTotalEP(?,?)",$param);
        return $rs;
    }
    
    public static function mfServiceOSRep($param){
        $rs = DB::select("call slctServiceTotalOS(?,?)",$param);
        return $rs;
    }
    
    public static function mfServiceNPSRep($param){
        $rs = DB::select("call slctServiceTotalNPS(?,?)",$param);
        return $rs;
    }
}
