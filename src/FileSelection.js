import React, { Component } from 'react';
import './FileSelection.css';
import image from './assets/image.png';
import getImageDataFromDataUrl from './utils/getImageDataFromDataUrl';
import hiro from './assets/hiro.png';

class FileSelection extends Component {
    handleChange = (event) => {
        var reader = new FileReader();
        reader.addEventListener('load', () => {
            getImageDataFromDataUrl(reader.result)
                .then(this.props.onFileSelected);
        }, false);

        reader.readAsDataURL(event.target.files[0]);
    }

    handleClick = () => {
        getImageDataFromDataUrl(image)
            .then(this.props.onFileSelected);
    }

    render() {
        return (
            <div className="file-selection container-fluid">
                <h1 className="h6 title">Sketch anything you want using your phone as a guide</h1>
                <hr className="my-4" />
                <ol>
                    <li className="hiro">
                        <div>
                            Print a <a href={hiro}>hiro marker</a>
                        </div>
                        <div className="marker"><a href={hiro}><img alt="Hiro marker example" src={hiro} /></a></div>
                    </li>
                    <li>
                        Put it on a sheet of paper
                    </li>
                    <li>
                        Choose something to draw
                        <div className="form-group">
                            <button htmlFor="file_input">
                                From your photo library
                                <input text="hello" id="file_input" className="file-input" type="file" accept="image/*" onChange={this.handleChange} />
                            </button>
                        </div>
                        <button onClick={this.handleClick}>Our drawing</button>
                    </li>
                </ol>
            </div>
        );
    }
}

export default FileSelection;
