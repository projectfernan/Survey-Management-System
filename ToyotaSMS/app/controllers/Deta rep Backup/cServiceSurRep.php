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
        Session::forget('DtFrm');
        Session::save();
        Session::forget('DtTo');
        Session::save();
        
        Session::put('RepCateg',$js['_RepCateg']);
        Session::save();
        Session::put('DtFrm',$js['_DtFrm']);
        Session::save();
        Session::put('DtTo',$js['_DtTo']);
        Session::save();
    }
    
    public function cfServiceDetaRep(){
        
        if(Session::has('RepCateg') && Session::has('DtFrm') && Session::has('DtTo')){
            
            $RepCateg = Session::get('RepCateg');
            $dtFrom=date_create(Session::get('DtFrm'));
            $DateFrm = date_format($dtFrom,'F j, Y');
            $dtTo=date_create(Session::get('DtTo'));
            $DateTo = date_format($dtTo,'F j, Y');
            
            $param = array(
                Session::get('DtFrm'),
                Session::get('DtTo')
            );
           
            switch ($RepCateg) {
                case "YesNo":
                    $rs = mServiceSurRep::mfServiceYnRep($param);

                    if(count($rs) > 0){
                        
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
//                        $fpdf->Line(8, 30,208,30);
                        $fpdf->Ln(7);
                        
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
                        $fpdf->Output();
                        exit;
                    }
                    else{
                        return json_encode($param);
                    }
                    break;
                case "Comment":
                    $rs = mServiceSurRep::mfServiceCommRep($param);

                    if(count($rs) > 0){
                        
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
//                        $fpdf->Line(8, 30,208,30);
                        $fpdf->Ln(7);
                        
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
                        $fpdf->Output();
                        exit;
                    }
                    else{
                        return json_encode($param);
                    }
                    break;
                case "PoorAverageExcellent":
                    $rs = mServiceSurRep::mfServicePaeRep($param);

                    if(count($rs) > 0){
                        
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
//                        $fpdf->Line(8, 30,208,30);
                        $fpdf->Ln(7);
                        
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
                           $fpdf->Cell(45,8,$r->ExcePercent.'%','B');
                           $fpdf->Ln();
                           $fpdf->SetFont('Arial','',11);
                           $fpdf->SetFillColor(255, 255, 255);
                           $fpdf->SetDrawColor(0, 0, 0);
                           $fpdf->Cell(130,8,'AVERAGE','B',0,'',true);
                           $fpdf->Cell(20,8,$r->TotalAverage,'B',0,'',true);
                           $fpdf->Cell(45,8,$r->AveragePercent.'%','B',0,'',true);
                           $fpdf->Ln();
                           $fpdf->SetFont('Arial','',11);
                           $fpdf->SetFillColor(255, 192, 203);
                           $fpdf->SetDrawColor(0, 0, 0);
                           $fpdf->Cell(130,8,'POOR','B',0,'',true);
                           $fpdf->Cell(20,8,$r->TotalPoor,'B',0,'',true);
                           $fpdf->Cell(45,8,$r->PoorPercent.'%','B',0,'',true);
                           $fpdf->Ln();
                           
                           $fpdf->SetFont('Arial','B',11); 
                           $fpdf->Cell(110,8,'');
                           $fpdf->Cell(20,8,'TOTAL : ');
                           $fpdf->Cell(20,8,$r->PAEtotal);
                           $fpdf->Cell(10,8,$r->PAEtotalPercent.'%');
                           $fpdf->Ln();
                        }
                        $fpdf->Output();
                        exit;
                    }
                    else{
                        return json_encode($param);
                    }
                    break;
                default:
            } 
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

            default:
        }
    }
    
}
