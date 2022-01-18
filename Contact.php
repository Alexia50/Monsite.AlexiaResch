<?php 
 
// hCAPTCHA API key configuration 
$siteKey = '2a0714e1-3e75-415f-853a-9338f2fc01c8'; 

$secretKey = '0x1f2b4aBEB5C49445a7F405689EcaEAD268D5c2BE'; 
 
// If the form is submitted 
$postData = $statusMsg ="";
$status ='error';

$statusMsg = ''; 
if(isset($_POST['submit'])){ 
     
    // Validate form fields 
    if(!empty($_POST['name']) && !empty($_POST['email'])){ 
         
        // Validate hCAPTCHA checkbox 
        if(!empty($_POST['h-captcha-response'])){ 
            // Verify API URL 
            $verifyURL = 'https://hcaptcha.com/siteverify'; 
             
            // Retrieve token from post data with key 'h-captcha-response' 
            $token = $_POST['h-captcha-response']; 
             
            // Build payload with secret key and token 
            $data = array( 
                'secret' => $secretKey, 
                'response' => $token, 
                'remoteip' => $_SERVER['REMOTE_ADDR'] 
            ); 
             
            // Initialize cURL request 
            // Make POST request with data payload to hCaptcha API endpoint 
            $curlConfig = array( 
                CURLOPT_URL => $verifyURL, 
                CURLOPT_POST => true, 
                CURLOPT_RETURNTRANSFER => true, 
                CURLOPT_POSTFIELDS => $data 
            ); 
            $ch = curl_init(); 
            curl_setopt_array($ch, $curlConfig); 
            $response = curl_exec($ch); 
            curl_close($ch); 
             
            // Parse JSON from response. Check for success or error codes 
            $responseData = json_decode($response); 
             
            // If reCAPTCHA response is valid 
            if($responseData->success){ 
                // Posted form data 
                $name = !empty($_POST['name'])?$_POST['name']:''; 
                $email = !empty($_POST['email'])?$_POST['email']:''; 
                $message = !empty($_POST['message'])?$_POST['message']:''; 
                 
                // Code to process the form data goes here... 
                 
                 
                $statusMsg = 'Your contact request has submitted successfully.'; 
            }else{ 
                $statusMsg = 'Robot verification failed, please try again.'; 
            } 
        }else{ 
            $statusMsg = 'Please check on the CAPTCHA box.'; 
        } 
    }else{ 
        $statusMsg = 'Please fill all the mandatory fields.'; 
    } 
} 
 
echo $statusMsg; 
 
?>