import axios from "axios";

class DeckAPI {
    static async drawCard(deckId,numOfCards=1){
            
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numOfCards}`)
            return res.data   
            // {
            //     "success": true,
            //     "deck_id": "ueqk5kg1ielg",
            //     "cards": [
            //       {
            //         "code": "3C",
            //         "image": "https://deckofcardsapi.com/static/img/3C.png",
            //         "images": {
            //           "svg": "https://deckofcardsapi.com/static/img/3C.svg",
            //           "png": "https://deckofcardsapi.com/static/img/3C.png"
            //         },
            //         "value": "3",
            //         "suit": "CLUBS"
            //       }
            //     ],
            //     "remaining": 51
            //   }        
    }
    
    
}

export default DeckAPI;