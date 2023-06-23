$(document).ready(function(){
    var eventTemplate = `{
        "att": 3,
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
        "uid": "1850557D-3F50-417C-84EC-B8CB832320B0",
        "lang": "en-US",
        "timestamp": "2023-06-18T00:20:01.502",
        "inst_date": "2023-06-18T00:16:01.502",
        "os": "15.6.1",
        "ip": "96.250.1.168",
        "idfa": "1850557D-3F50-417C-84EC-B8CB832320B0",   
        "idfv": "18506666-3F50-417C-84EC-B8CB83236666",
        "type": "iPhone",
        "counter": 4,
        "aie": true,
        "event_currency": "USD",
        "event_name": "af_purchase",
        "event_value": {"af_revenue" : 19.99, "af_currency": "USD", "af_quantity": 1, "af_content_type" : "shirt"}
    }`;

    var installTemplate = `{
        "att": 3,
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
        "uid": "1850557D-3F50-417C-84EC-B8CB832320B0",
        "lang": "en-US",
        "timestamp": "2023-06-18T00:20:01.502",
        "inst_date": "2023-06-18T00:16:01.502",
        "os": "15.6.1",
        "ip": "96.250.1.168",
        "idfa": "1850557D-3F50-417C-84EC-B8CB832320B0",   
        "idfv": "18506666-3F50-417C-84EC-B8CB83236666",
        "type": "iPhone",
        "counter": 1,
        "aie": true
        }`;

    $("#event_button").click(function(){
        $("#myTextarea").val(eventTemplate);
    });
    $("#install_button").click(function(){
        $("#myTextarea").val(installTemplate);
    });

/*
    $("#mainSubmitButton").click(function(){
        // Let's call it 2 times just for fun...
        $("#mainSubmit").LoadingOverlay("show", {
            background  : "rgba(165, 190, 100, 0.5)"
        });

        // Here we might call the "hide" action 2 times, or simply set the "force" parameter to true:
        $("#mainSubmit").LoadingOverlay("hide", true);
    });

*/

    



});
