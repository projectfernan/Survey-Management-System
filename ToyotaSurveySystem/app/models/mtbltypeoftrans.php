<?php

class mtbltypeoftrans {
    public static function mfGetTypeOfTrans(){
        $rs = DB::select('select TypeOfTrans from tbltypeoftrans order by TypeOfTrans');
        Return $rs;
    }
}
