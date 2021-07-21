<?php

class mDtNow {
    public static function mfGetdtnow(){
        $rs = DB::select('call slctdtnow');
        Return $rs;
    }
}
