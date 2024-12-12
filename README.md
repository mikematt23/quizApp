Tasks:

Build Quiz component

        should handle all the state of your quiz application
        should iterate through the quiz questions
        display a results screen when all quiz questions have been exhausted
        
Build a Question component

        displays the main question text
        displays an list of answers (Answers component)
        [optional][advanced]
        give each question a limited amount of time for the user to answer before skipping the question (save 'null' result for user answer)
        abstract timer logic to its own component called QuestionTimer
        
Build an Answers component

        displays a list of clickable answers
        implement when an answer is selected will move to the next question in the list
        
Build a Summary component

        should be shown (in the Quiz component) when all answers in the quiz have been exhausted
        iterate through the answers, and display the question text, and the user answer
        user answer should reflect if correct (green), incorrect (red), or "skipped", not-answered (white)
     
