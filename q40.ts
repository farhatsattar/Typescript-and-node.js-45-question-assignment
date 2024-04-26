/*40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.*/

function make_album1(artist: string , title: string){
    return {artist, title}
    }

let album1 = make_album1("ali" , "smack that");
        console.log(album1);

        album1 = make_album1("bilal" , "red wave");
        console.log(album1);

        album1 = make_album1("hamza" , "seenbreez")
        console.log(album1);

// number of track

function make_album2(artist: string , title: string , numberoftracks?: number){
    return {artist, title, numberoftracks}
    }

let album2= make_album2("ali" , "smack that", 10);
        console.log(album2);

        album2 = make_album2("bilal" , "red wave", 20);
        console.log(album2);

        album2 = make_album2("hamza" , "seenbreez", 30)
        console.log(album2);

