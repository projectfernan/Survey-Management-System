<?php

class cServiceSurRep extends Controller{
    public static function cfShwServiceDetaRep(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Reports') == 1){
                return View::make('vServiceDetaRep');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
            return View::make('vLogin');
        }
    }
    
    public static function cfShwServiceBarRep(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Reports') == 1){
                return View::make('vServiceBarRep');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfGetServiceDetaRep(){
        $ajx = Input::get('data');
//        $base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        Session::forget('RepCateg');
        Session::save();
        Session::forget('RepCateg2');
        Session::save();
        Session::forget('RepCateg3');
        Session::save();
        Session::forget('RepCateg4');
        Session::save();
        Session::forget('DtFrm');
        Session::save();
        Session::forget('DtTo');
        Session::save();
        
        Session::put('RepCateg',$js['_RepCateg']);
        Session::save();
        Session::put('RepCateg2',$js['_RepCateg2']);
        Session::save();
        Session::put('RepCateg3',$js['_RepCateg3']);
        Session::save();
        Session::put('RepCateg4',$js['_RepCateg4']);
        Session::save();
        Session::put('DtFrm',$js['_DtFrm']);
        Session::save();
        Session::put('DtTo',$js['_DtTo']);
        Session::save();
    }
    
    public static function DetaRep($categ,$param,$fpdf){
        switch ($categ) {
        case "YesNo":
            $rs = mServiceSurRep::mfServiceYnRep($param);

            if(count($rs) > 0){
                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(255, 192, 203);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'YES','B');
                   $fpdf->Cell(20,8,$r->TotalYes,'B');
                   $fpdf->Cell(45,8,$r->YesPercent.'%','B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'NO','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalNo,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->NoPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->Cell(110,8,'');
                   $fpdf->Cell(20,8,'TOTAL : ');
                   $fpdf->Cell(20,8,$r->YNtotal);
                   $fpdf->Cell(10,8,$r->YNtotalPercent.'%');
                   $fpdf->Ln();
                }
            }
            else{
                return json_encode($param);
            }
            break;
        case "Comment":
            $rs = mServiceSurRep::mfServiceCommRep($param);

            if(count($rs) > 0){
                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(255, 192, 203);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'WITH VOC','B');
                   $fpdf->Cell(20,8,$r->TotalComm,'B');
                   $fpdf->Cell(45,8,$r->CommPercent.'%','B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'WITHOUT VOC','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalNoComm,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->NoCommPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->Cell(110,8,'');
                   $fpdf->Cell(20,8,'TOTAL : ');
                   $fpdf->Cell(20,8,$r->CNCtotal);
                   $fpdf->Cell(10,8,$r->CNCtotalPercent.'%');
                   $fpdf->Ln();
                }
            }
            else{
                return json_encode($param);
            }
            break;
        case "PoorAverageExcellent":
            $rs = mServiceSurRep::mfServicePaeRep($param);

            if(count($rs) > 0){
                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'EXCELLENT','B');
                   $fpdf->Cell(20,8,$r->TotalExce,'B');
                   $fpdf->Cell(45,8,$r->ExcePercent.'%','B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'AVERAGE','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalAverage,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->AveragePercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'POOR','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalPoor,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->PoorPercent.'%','B',0,'',true);
                   $fpdf->Ln();

                   $fpdf->SetFont('Arial','B',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->Cell(110,8,'','B',0,'',true);
                   $fpdf->Cell(20,8,'TOTAL :','B',0,'',true);
                   $fpdf->Cell(20,8,$r->PAEtotal,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->PAEtotalPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                }
            }
            else{
                return json_encode($param);
            }
            break;
        case "ExcellentPoor":
            $rs = mServiceSurRep::mfServiceEPRep($param);

            if(count($rs) > 0){

                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(255, 192, 203);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'EXCELLENT','B');
                   $fpdf->Cell(20,8,$r->TotalExce,'B');
                   $fpdf->Cell(45,8,$r->ExcePercent,'B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'POOR','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalPoor,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->PoorPercent,'B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->Cell(110,8,'');
                   $fpdf->Cell(20,8,'TOTAL : ');
                   $fpdf->Cell(20,8,$r->EPtotal);
                   $fpdf->Cell(10,8,$r->EPtotalPercent);
                   $fpdf->Ln();
                }
            }
            break;
        case "OverallSatisfaction":
            $rs = mServiceSurRep::mfServiceOSRep($param);

            if(count($rs) > 0){

                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'VERY SATISFIED','B');
                   $fpdf->Cell(20,8,$r->TotalVS,'B');
                   $fpdf->Cell(45,8,$r->VSPercent.'%','B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'SATISFIED','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalS,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->SPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'NEITHER SATISFIED NOR DISSATISFIED','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalNSND,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->NSNDPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'DISSATISFIED','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalD,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->DPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'VERY DISSATISFIED','B',0,'',true);
                   $fpdf->Cell(20,8,$r->TotalVD,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->VDPercent.'%','B',0,'',true);
                   $fpdf->Ln();

                   $fpdf->SetFont('Arial','B',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->Cell(110,8,'','B',0,'',true);
                   $fpdf->Cell(20,8,'TOTAL :','B',0,'',true);
                   $fpdf->Cell(20,8,$r->totalOS,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->OStotalPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                }

            }
            break;
        case "NetPromoterScore":
            $rs = mServiceSurRep::mfServiceNPSRep($param);

            if(count($rs) > 0){

                foreach($rs as $r){
                   $fpdf->SetFont('Arial','B',11); 
                   $fpdf->SetFillColor(178, 34, 34);
                   $fpdf->SetTextColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->MultiCell(195,8,'Q'.$r->Qno.'. '.$r->Question,'B','L',true);

                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->SetTextColor(0, 0, 0);
                   $fpdf->Cell(130,8,'10','B');
                   $fpdf->Cell(20,8,$r->Total10,'B');
                   $fpdf->Cell(45,8,$r->Percent10.'%','B');
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'9','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total9,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent9.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'8','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total8,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent8.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'7','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total7,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent7.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'6','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total6,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent6.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'5','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total5,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent5.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'4','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total4,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent4.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'3','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total3,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent3.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'2','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total2,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent2.'%','B',0,'',true);
                   $fpdf->Ln();
                   $fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'1','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total1,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent1.'%','B',0,'',true);
                   $fpdf->Ln();$fpdf->SetFont('Arial','',11);
                   $fpdf->SetFillColor(255, 255, 255);
                   $fpdf->SetDrawColor(0, 0, 0);
                   $fpdf->Cell(130,8,'0','B',0,'',true);
                   $fpdf->Cell(20,8,$r->Total0,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->Percent0.'%','B',0,'',true);
                   $fpdf->Ln();

                   $fpdf->SetFont('Arial','B',11);
                   $fpdf->SetFillColor(255, 192, 203);
                   $fpdf->Cell(110,8,'','B',0,'',true);
                   $fpdf->Cell(20,8,'TOTAL :','B',0,'',true);
                   $fpdf->Cell(20,8,$r->totalNPS,'B',0,'',true);
                   $fpdf->Cell(45,8,$r->NPStotalPercent.'%','B',0,'',true);
                   $fpdf->Ln();
                }

            }
            break;
        }
    }
    
    public function cfServiceDetaRep(){
        
        if(Session::has('RepCateg') && Session::has('DtFrm') && Session::has('DtTo')){
            
            $RepCateg = Session::get('RepCateg');
            $RepCateg2 = Session::get('RepCateg2');
            $RepCateg3 = Session::get('RepCateg3');
            $RepCateg4 = Session::get('RepCateg4');
            $dtFrom = date_create(Session::get('DtFrm'));
            $DateFrm = date_format($dtFrom,'F j, Y');
            $dtTo=date_create(Session::get('DtTo'));
            $DateTo = date_format($dtTo,'F j, Y');
            
            $param = array(
                Session::get('DtFrm'),
                Session::get('DtTo')
            );
           
            $fpdf = new Anouar\Fpdf\Fpdf('P','mm','Letter');
            $fpdf->AddPage('P','Letter',0);

            $fpdf->Image('includes/img/TQA.jpg',165,5,-700);
            $fpdf->SetFont('Helvetica','B',14);
            $fpdf->Cell(200,5,'SERVICE SURVEY DETAILED REPORT');
            $fpdf->Ln(8);
            $fpdf->SetFont('Helvetica','',11);
            $fpdf->Cell(10,5,'From : '.$DateFrm);
            $fpdf->Ln(5);
            $fpdf->Cell(5.5,0,'');
            $fpdf->Cell(10,5,'To: '.$DateTo);
            $fpdf->Ln(5);
            $fpdf->Ln(7);
            
            if ($RepCateg <> ''){
                $this->DetaRep($RepCateg, $param, $fpdf);
            }
            
            if ($RepCateg2 <> ''){
                $this->DetaRep($RepCateg2, $param, $fpdf);
            }
            
            if ($RepCateg3 <> ''){
                $this->DetaRep($RepCateg3, $param, $fpdf);
            }
            
            if ($RepCateg4 <> ''){
                $this->DetaRep($RepCateg4, $param, $fpdf);
            }
            
            $fpdf->Output();
            exit;
        }
        
    }
    
    public function cfServiceBarRep(){
        $ajx = Input::get('data');
//        $base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
         $param = array(
                $js['_DtFrm'],
                $js['_DtTo']
            );
        
        switch ($js['_RepCateg']) {
            case "YesNo":
                $rs = mServiceSurRep::mfServiceYnRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;
            case "Comment":
                $rs = mServiceSurRep::mfServiceCommRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;
            case "PoorAverageExcellent":
                $rs = mServiceSurRep::mfServicePaeRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;
            case "ExcellentPoor":
                $rs = mServiceSurRep::mfServiceEPRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;
            case "OverallSatisfaction":
                $rs = mServiceSurRep::mfServiceOSRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;      
            case "NetPromoterScore":
                $rs = mServiceSurRep::mfServiceNPSRep($param);

                if(count($rs) > 0){
                    return json_encode($rs);
                }
                else{
                    return json_encode($param);
                }
                break;  
        }
    }
    
}
