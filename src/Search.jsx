import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Search() {
    return(
        <div>
            <div class="search-box">
                <button class="btn-search">🔎</button>
                <input type="text" class="input-search" placeholder="선생님을 찾아보세요" />
            </div>

        </div>
    );
}

export default Search;