
import fetch from 'isomorphic-fetch'
import {
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE
} from '../constants'

const postingVote = () => ({
  type: VOTE_REQUEST
})

const postedVote = () => ({
  type: VOTE_SUCCESS
})

const errorVote = error => ({
  type: VOTE_FAILURE,
  error: error
})

export const postVote = (articleID, userID, vote) => async (dispatch) => {
  dispatch(postingVote())
  try {
    const response = await fetch(`/api/votes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        vote: {
          user_id: userID,
          article_id: articleID,
          voted: vote
        }
      })
    })
    if (!response.ok) {
      throw (response.json())
    }
    dispatch(postedVote())
  } catch (error) {
    errorVote(error.error)
  }
}
