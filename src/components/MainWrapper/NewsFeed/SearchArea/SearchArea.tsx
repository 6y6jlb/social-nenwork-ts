import style from "./SearchArea.module.css";
import React from "react";
import {createField, Input} from "../../../common/formsContols/FormControls";
import {requiredField} from "../../../../utils/validators";
import Button from "../../../common/Button/Button";
import {InjectedFormProps, reduxForm} from "redux-form";


type PropsType = {}
type SearchFormType = {
    searchArea: string
}
type SearchPropsType = {
    onSearchArea: (searchText: string) => void
}

const SearchArea: React.FC<InjectedFormProps<SearchFormType>> & PropsType = (props) => {
    return <div className={ style.search }>
        <form onSubmit={ props.handleSubmit }>
            { createField ( 'search ...', 'searchArea', [requiredField], Input, {type: 'text'} ) }
            <Button text={ 'search' }/>
        </form>
    </div>
}

const Form = reduxForm<SearchFormType> ( {form: 'profile add message form'} ) ( SearchArea )

const SearchNews: React.FC<SearchPropsType> = React.memo ( ({onSearchArea}) => {
    const onSubmit = (formData: SearchFormType) => {
        const searchAreaText = formData.searchArea;
        onSearchArea ( searchAreaText )
    }

    return (
        <div className={ style.searchingArea }>
            <Form onSubmit={ onSubmit }/>
        </div>
    )
} );

export default SearchNews;