import style from "./SearchNews.module.css";
import React from "react";
import {createField, Input} from "../../../common/formsContols/FormControls";
import {requiredField} from "../../../../utils/validators";
import Button from "../../../common/Button/Button";
import {InjectedFormProps, reduxForm} from "redux-form";


type PropsType = {}
type SearchNewsFormType = {
    searchNews: string
}
type SearchNewsPropsType = {
    onSearchArea: (searchText: string) => void
}

const SearchNewsForm: React.FC<InjectedFormProps<SearchNewsFormType>> & PropsType = (props) => {
    return <div className={ style.search }>
        <form onSubmit={ props.handleSubmit }>
            { createField ( 'search news here', 'searchNews', [requiredField], Input, {type: 'text'} ) }
            <Button text={ 'search' }/>
        </form>
    </div>
}

const SearchNewsFormFromReduxForm = reduxForm<SearchNewsFormType> ( {form: 'profile add message form'} ) ( SearchNewsForm )

const SearchNews: React.FC<SearchNewsPropsType> = React.memo ( ({onSearchArea}) => {
    const onSubmit = (formData: SearchNewsFormType) => {
        const searchAreaText = formData.searchNews;
        onSearchArea ( searchAreaText )
    }

    return (
        <div className={ style.searchingArea }>
            <SearchNewsFormFromReduxForm onSubmit={ onSubmit }/>
        </div>
    )
} );

export default SearchNews;