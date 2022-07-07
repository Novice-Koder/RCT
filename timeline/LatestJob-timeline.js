var json = {
    "Product": [
        {
            "id":1,
            "Link": "https://rajasthancomputerteacher.netlify.app/HTML/htmlquiz/quiz.html",
            "distributor": "RPSC School Lecturer Sanskrit Education Online Form 2022",
        },
    
    {
        "id":2,
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": " RPSC Occupational Therapist Online Form 2022"
    }
    ,
    {
        "id":3,
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "SSC Selection Post X Online Form 2022"
    }
    ,
    {
        "id":4,
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "UP Panchayatiraj Sahayak, DEO Recruitment 2022"
    }
    ,
    {
        "id": 5,
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "India Post IPPB Executive Online Form 2022 "
    }
    ,
    {
        "id": 6,
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "MPPSC Pre 2021 Online Form "
    }
    
    ]
}

$('#latestjoblist').pagination({ // you call the plugin
  dataSource: json.Product, // pass all the data
  pageSize: 6, // put how many items per page you want
  callback: function(data, pagination) {
      // data will be chunk of your data (json.Product) per page
      // that you need to display
      var wrapper = $('#latestjoblist .latestjobwrapper').empty();
      $.each(data, function (i, f) {
         $('#latestjoblist .latestjobwrapper').append('<ul class="listview"><li class="item" ><a href="' + f.Link + '">'+f.distributor+' <font color="#0F94F6"><span>'+f.category+'</span></font></a></li></ul>');
      });
    }
   });

