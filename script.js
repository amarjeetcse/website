function generate(){
    var quotes={"ए.पी.जे. अब्दुल कलाम":"इससे कोई फर्क नहीं पड़ता कि आपके आस-पास का वातावरण कैसा है, अपनी ईमानदारी कायम रखना हमेशा संभव होता है।", "Albert Einstein": "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.","ए.पी.जे. अब्दुल कलाम ":"अपनी पहली जीत के बाद आराम मत करो क्योंकि यदि आप दूसरे प्रयास में असफल होते हैं, तो कई लोग  यह कहने के लिए इंतजार कर रहे हैं कि आपकी पहली जीत सिर्फ भाग्य थी","mahatma gandhi":"You must be the change you wish to see in the world.","Eleanor Roosevelt":"Great minds discuss ideas; average minds discuss events; small minds discuss people.","Nelson Mandela":"The greatest glory in living lies not in never falling, but in rising every time we fall"," एपीजे अब्दुल कलाम":"अगर तुम सूरज की तरह चमकना चाहते हो तो पहले सूरज की तरह जलो।","Walt Disney":"All our dreams can come true – if we have the courage to pursue them."," एपीजे अब्दुल कलाम":"जीवन एक कठिन खेल हैं। आप एक व्यक्ति होने के अपने जन्मसिद्ध अधिकार को बनाये रखकर इसे जीत सकते हैं।"
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)]
    var quote=quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}