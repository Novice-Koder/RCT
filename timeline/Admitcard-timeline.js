var json = {
    "Product": [
        {
            "id":1,
            "time": "27 Feb 2022",
            "Link": "https://rajasthancomputerteacher.netlify.app/HTML/htmlquiz/quiz.html",
            "distributor": "HTML Basic - Quiz-1",
            "category": "(HTML)"
        },
    
    {
        "id":2,
        "time": "22 Jan 2022",
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "DE Quiz-1 ",
        "category": "(DHTML)"
    }
    ,
    {
        "id":3,
        "time": "23 Jan 2022",
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "Software Engineering Quiz-1 ",
        "category": "(SE)"
    }
    ,
    {
        "id":4,
        "time": "24 Jan 2022",
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "Operating System Quiz-1 ",
        "category": "(OS)"
    }
    ,
    {
        "id": 5,
        "time": "25 Jan 2022",
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "Digital Electronics Quiz-1 ",
        "category": "(DE)"
    }
    ,
    {
        "id": 6,
        "time": "26 Jan 2022",
        "Link": "http://127.0.0.1:5500/HTML/htmlquiz/quiz.html",
        "distributor": "Visual Basic Quiz-1 ",
        "category": "(VB)"
    }
    
    ]
}

$('#admitcardlist').pagination({ // you call the plugin
  dataSource: json.Product, // pass all the data
  pageSize: 6, // put how many items per page you want
  callback: function(data, pagination) {
      // data will be chunk of your data (json.Product) per page
      // that you need to display
      var wrapper = $('#admitcardlist .admitcardwrapper').empty();
      $.each(data, function (i, f) {
         $('#admitcardlist .admitcardwrapper').append('<ul class="listview"><li class="item" ><a href="' + f.Link + '">'+f.distributor+' <font color="#0F94F6"><span>'+f.category+'</span></font></a></li></ul>');
      });
    }
   });

