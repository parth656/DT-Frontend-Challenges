import React, { useState } from 'react';
import "./container.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUpload, faHome, faSatellite, faUserEdit, faBell, faEllipsisVertical, faLightbulb, faComment, faQuestion, faLocust, faPen, faCalendar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles



const Container = ({ data }) => {


    const { tasks } = data;
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    const [threadCollapsed, setThreadCollapsed] = useState(true);

    const toggleThread = () => {
        setTimeout(() => {
            setThreadCollapsed(!threadCollapsed);
        }, 200);
    };


    const toggleMenu = () => {
        setTimeout(() => {
            setMenuCollapsed(!menuCollapsed);
        }, 200);
    };


    const [text, setText] = useState('');

    const handleTextChange = (value) => {
        setText(value);
    };


    return (
        <div>
            <div className='navbar'>
                <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="buttonpng" />
                <div className='navButtons'>
                    <FontAwesomeIcon icon={faHome} style={{ color: "#576cd6", height: "20px" }} />
                    <FontAwesomeIcon icon={faSatellite} style={{ color: "#576cd6", height: "20px" }} />
                    <FontAwesomeIcon icon={faUserEdit} style={{ color: "#576cd6", height: "20px" }} />
                    <FontAwesomeIcon icon={faBell} style={{ color: "#576cd6", height: "20px" }} />
                    <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#576cd6", height: "20px" }} />
                </div>
            </div>
            <div className={`Menu ${menuCollapsed ? 'collapsed' : ''}`}>
                <div className='categoryContent'>
                    <button className="menuButton" onClick={toggleMenu}>
                        {` ${menuCollapsed ? '→' : '←'}`}
                    </button>
                    <button className='greenButton'>
                        <img src="https://media.tenor.com/Hw7f-4l0zgEAAAAC/check-green.gif" alt="buttonpng" />
                    </button>
                    <p>Journey Board</p>
                    <ul>
                        <li className='fc'> Explore the world of management</li>
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure your pointers</li>
                        <li>4SA Method</li>
                    </ul>
                </div>
            </div>

            {tasks.map((task) => (
                <div key={task.task_id} className="container-grid">
                    <div className='explore'>
                        <h3>{task.task_title}</h3>
                        <p>{task.task_description}</p>
                    </div>
                    <div className="assets">
                        {task.assets.map((asset) => (
                            <div key={asset.asset_id} className="asset">
                                <div className='assetTitle'>
                                    <h4 className='titleText'>{asset.asset_title}</h4>
                                    <button>i</button>
                                </div>
                                <p><b>Description: </b>{asset.asset_description}</p>
                                {asset.asset_content_type === 'video' ? (
                                    <iframe
                                        title={asset.asset_title}
                                        src={asset.asset_content}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                ) : asset.asset_content_type === 'threadbuilder' ? (
                                    <div className='threadbuilder'>
                                        <div className='ButtonAndName'>
                                            <button className='toggleBtn' onClick={toggleThread}>{` ${threadCollapsed ? '>' : '<'}`}</button>
                                            <h4>Thread A</h4>
                                        </div>
                                        <div className={threadCollapsed ? 'threadContentcollapsed' : 'threadContent'}>
                                            <h3>Sub Thread 1</h3>
                                            <h3>Sub Interpretation 1</h3>
                                            <textarea></textarea>
                                            <textarea></textarea>
                                            <div className='icons' >
                                                <FontAwesomeIcon icon={faLightbulb} style={{ color: "darkgray", height: "20px" }} />
                                                <FontAwesomeIcon icon={faComment} style={{ color: "darkgray", height: "20px" }} />
                                                <FontAwesomeIcon icon={faQuestion} style={{ color: "darkgray", height: "20px" }} />
                                                <FontAwesomeIcon icon={faLocust} style={{ color: "darkgray", height: "20px" }} />

                                            </div>
                                            <div className='select'>
                                                <select>
                                                    <option >Select Category</option>
                                                    <option >Remark</option>
                                                    <option>Sub-argument</option>
                                                    <option >Sub-explanation</option>
                                                    <option>Core-principle</option>
                                                </select>
                                                <select>
                                                    <option >Select Process</option>
                                                    <option>Question</option>
                                                    <option >Analogy</option>
                                                    <option>Sarcasm</option>
                                                    <option>Insight</option>
                                                    <option>Counter-Example</option>
                                                </select>
                                            </div>
                                            <div className='subBtn'><button>+ Sub thread</button></div>
                                            <div className='summary'><h3>Sub Interpretation 1</h3>
                                                <textarea></textarea></div>
                                            <div>📎 Thread Credit <FontAwesomeIcon icon={faPen} style={{ color: "blue", height: "20px" }} /></div>
                                            <div >
                                                <select className='select1'>
                                                    <option >Emotion</option>
                                                    <option >Eureka Emhasis</option>
                                                    <option>Blissfully Puzzled</option>
                                                    <option >Spiritually Determined</option>
                                                    <option>Upset & Motivated</option>
                                                </select>
                                            </div>
                                            <div className='ThreadBtn'><button>+ New Thread</button></div>
                                        </div>


                                    </div>
                                ) : asset.asset_title === "Structure you pointers " ? (
                                    <div className='article'>

                                        <div className='titleAndContent'>
                                            <h4>Title</h4>
                                            <textarea></textarea>
                                            <h4>Content</h4>
                                            <ReactQuill
                                                value={text}
                                                onChange={handleTextChange}
                                                placeholder="Enter your text here"
                                                style={{ height: '200px' }}
                                                modules={{
                                                    toolbar: [
                                                        [{ header: [1, 2, false] }],
                                                        ['bold', 'italic', 'underline', 'strike'],
                                                        [{ list: 'ordered' }, { list: 'bullet' }],
                                                        ['link', 'image'],
                                                        ['clean'],
                                                    ],
                                                }}
                                            />


                                            <div className='category'><h4>Category</h4>
                                                <h4>Sub Category</h4>
                                                <select>
                                                    <option>--Select--</option>
                                                    <option>Miscellaneous</option>
                                                    <option>Learnability</option>
                                                    <option>Values Leadership</option>
                                                    <option>Technology</option>
                                                    <option>Acument</option>
                                                    <option>Menagement</option>
                                                    <option>Bussiness</option>
                                                </select>

                                                <select>
                                                    <option>Select Sub-Category</option>
                                                </select>
                                                <h4>Thumbnail</h4>
                                                <h4>Thought Process</h4>
                                                <button className='browseBtn'>Choose file Browse</button>


                                                <select>
                                                    <option></option>
                                                    <option>Eureka Moment</option>
                                                    <option>Answer</option>
                                                    <option>Question</option>
                                                    <option>Root of Thought</option>
                                                    <option>Reflection</option>

                                                </select>
                                                <button className='btn1'> <FontAwesomeIcon icon={faSave} style={{ color: "white", height: "20px" }} />Save Draft</button>
                                                <button className='btn1'> <FontAwesomeIcon icon={faUpload} style={{ color: "white", height: "20px" }} />Publish</button>

                                            </div>

                                        </div>


                                    </div>
                                ) : (
                                    <div className='methodContainer'>
                                        <iframe
                                            title={asset.asset_title}
                                            src={asset.asset_content}
                                            frameborder="0"

                                        ></iframe>

                                    </div>


                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='buttons3'>
                <FontAwesomeIcon className='btn2' icon={faQuestion} style={{ color: "white" }} />
                <FontAwesomeIcon className='btn3' icon={faUserFriends} style={{ color: "white" }} />
                <FontAwesomeIcon className='btn4' icon={faCalendar} style={{ color: "white" }} />
            </div>
        </div>

    );
};

export default Container;